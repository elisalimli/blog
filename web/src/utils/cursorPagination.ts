import { Resolver } from '@urql/exchange-graphcache';

export const cursorPagination = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName, parentFieldKey } = info;
    const allFields = cache.inspectFields(entityKey);
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
    const size = fieldInfos.length;

    if (size === 0) {
      return undefined;
    }
    const isItInTheCache = cache.resolve(entityKey, parentFieldKey) as string;
    const results: string[] = [];
    info.partial = !isItInTheCache;
    let hasMore = false;
    fieldInfos.forEach((fi) => {
      const key = cache.resolve(entityKey, fi.fieldKey) as string;
      const _hasMore = cache.resolve(key, 'hasMore') as boolean;
      hasMore = _hasMore;
      const data = cache.resolve(key, fieldName) as string[];
      results.push(...data);
    });
    return {
      __typename: 'PostsResponse',
      hasMore,
      posts: results,
    };
  };
};
