import { cacheExchange } from '@urql/exchange-graphcache';
import { dedupExchange, Exchange, fetchExchange } from 'urql';
import { pipe, tap } from 'wonka';
import { LogoutMutation, MeDocument, MeQuery } from '@/generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';
import { cursorPagination } from './cursorPagination';
import { isServer } from './isServer';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';

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
    // url: 'http://localhost:4000/graphql',
    url: (process.env.NEXT_PUBLIC_API_URL + '/graphql') as string,
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
            posts: cursorPagination('posts'),
            postsBySearch: cursorPagination('posts'),
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

            createPost(result, args, cache, info) {
              const key = 'Query';

              //invalidating latest posts when new post created
              cache
                .inspectFields(key)
                .filter((field) => field.fieldName === 'latestPosts')
                .forEach((field) => {
                  cache.invalidate(key, field.fieldName, field.arguments);
                });
            },
          },
        },
      }),
      errorExchange,
      ssrExchange,
      multipartFetchExchange,
      fetchExchange,
    ],
  };
};
