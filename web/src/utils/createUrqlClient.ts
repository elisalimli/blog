import { cacheExchange } from '@urql/exchange-graphcache';
import { relayPagination } from '@urql/exchange-graphcache/extras';
import { dedupExchange, Exchange, fetchExchange } from 'urql';
import { pipe, tap } from 'wonka';

import { betterUpdateQuery } from './betterUpdateQuery';
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
        updates: {
          Query: {
            posts: (_result, _, cache, __) => {
              console.log('result', _result);
            },
          },
          Mutation: {
            // register: (_result, _, cache, __) => {
            //   betterUpdateQuery<RegisterMutation, MeQuery>(
            //     cache,
            //     { query: MeDocument },
            //     _result,
            //     (result, data) => {
            //       if (result.register.errors) return data;
            //       return {
            //         me: result.register.user,
            //       };
            //     }
            //   );
            // },
          },
        },
      }),
      errorExchange,
      ssrExchange,
      fetchExchange,
    ],
  };
};
