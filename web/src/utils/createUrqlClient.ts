import { cacheExchange, Resolver } from '@urql/exchange-graphcache';
import {
  relayPagination,
  simplePagination,
} from '@urql/exchange-graphcache/extras';
import {
  dedupExchange,
  Exchange,
  fetchExchange,
  stringifyVariables,
} from 'urql';
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
// const cursorPagination = (): Resolver => {
//   return (_parent, fieldArgs, cache, info) => {
//     const { parentKey: entityKey, fieldName } = info;
//     const allFields = cache.inspectFields(entityKey);
//     const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
//     const size = fieldInfos.length;
//     if (size === 0) {
//       return undefined;
//     }

//     const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
//     const isItInTheCache = cache.resolve({ __typename: entityKey }, 'posts');
//     info.partial = !isItInTheCache;
//     let hasMore = true;
//     const results: string[] = [];
//     fieldInfos.forEach((fi) => {
//       const data = cache.resolve(
//         { __typename: 'PostsResponse' },
//         'getPosts'
//       ) as string[];
//       const _hasMore = cache.resolve(
//         { __typename: 'PostsResponse' },
//         'hasMore'
//       );
//       if (!_hasMore) {
//         hasMore = _hasMore as boolean;
//       }
//       results.push(...data);
//     });

//     return {
//       __typename: 'PostsResponse',
//       hasMore,
//       posts: results,
//     };
//   };
// };
import { stringifyVariables } from '@urql/core';
import { Resolver, Variables, NullArray } from '../types';

export type MergeMode = 'before' | 'after';

export interface PaginationParams {
  offsetArgument?: string;
  limitArgument?: string;
  mergeMode?: MergeMode;
}

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
            // getPosts: cursorPagination(),
          },
        },
        updates: {
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
