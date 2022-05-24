import { Resolver } from '@urql/exchange-graphcache';

export const cursorPagination = (fieldKey: string): Resolver => {
  return (_parent, fieldArgs: any, cache, info) => {
    const { parentKey: entityKey, fieldName, parentFieldKey } = info;
    const allFields = cache.inspectFields(entityKey);
    let fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
    const size = fieldInfos.length;

    if (size === 0) {
      return undefined;
    }

    const isItInTheCache = cache.resolve(entityKey, parentFieldKey) as string;
    const results: string[] = [];
    // for refetching queries if is not in cache
    info.partial = !isItInTheCache;
    let hasMore = false;

    // for prevent duplicated posts
    if (!fieldArgs?.input?.cursor) {
      // if searching
      if (fieldArgs?.input?.query) {
        fieldInfos = fieldInfos.filter(
          (fi: any) => fi?.arguments?.input?.query == fieldArgs?.input?.query
        );
        // for home page and blog,when you load a bunch of posts,then if you navigate to home,there will be some duplicated posts
      } else {
        fieldInfos = [fieldInfos[0]];
      }
    }

    fieldInfos.forEach((fi) => {
      const key = cache.resolve(entityKey, fi.fieldKey) as string;
      const _hasMore = cache.resolve(key, 'hasMore') as boolean;
      hasMore = _hasMore;

      const data = cache.resolve(key, fieldKey) as string[];
      results.push(...(data || []));
    });

    return {
      __typename: 'PostsResponse',
      hasMore,
      posts: results,
    };
  };
};
