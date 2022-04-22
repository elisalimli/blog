import { cacheExchange } from '@urql/exchange-graphcache';
import { Router } from 'next/router';
import { dedupExchange, Exchange, fetchExchange } from 'urql';
import { pipe, tap } from 'wonka';
import { LogoutMutation, MeDocument, MeQuery } from '../generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';

import { cursorPagination } from './cursorPagination';
import { isServer } from './isServer';

// import { MeDocument, MeQuery, RegisterMutation } from '../generated/graphql';

const errorExchange: Exchange =
  ({ forward }) =>
  (ops$) => {
    return pipe(
      forward(ops$),
      tap(({ error }) => {
        // @todo improve this
        // if (error?.message.includes("not authenticated")) {
        //   Router.replace("/login");
        // }
      })
    );
  };

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = '';
  if (isServer) {
    cookie = ctx?.req?.headers?.cookie;
  }

  return {
    // url: process.env.NEXT_PUBLIC_API_URL,
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
      credentials: 'include' as RequestCredentials,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: {
          PostsResponse: () => null,
        },
        resolvers: {
          Query: {
            posts: cursorPagination(),
          },
        },
        updates: {
          Mutation: {
            logout: (_result, _, cache, __) => {
              betterUpdateQuery<LogoutMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                () => {
                  return {
                    me: null,
                  };
                }
              );
            },
          },
        },
      }),
      errorExchange,
      ssrExchange,
      fetchExchange,
    ],
  };
};
