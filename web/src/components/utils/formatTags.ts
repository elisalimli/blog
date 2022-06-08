import { TagSnippetFragment } from '@/generated/graphql';

// for react-select
export const formatTags = (tags: TagSnippetFragment[]) => {
  const arr = tags?.map((i) => {
    return {
      label: i.name,
      value: i.name,
    };
  });
  return arr;
};
