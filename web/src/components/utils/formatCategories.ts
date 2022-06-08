import { CategorySnippetFragment } from '@/generated/graphql';

// for react-select
export const formatCategories = (categories: CategorySnippetFragment[]) => {
  const arr = categories?.map((i) => {
    return {
      label: i.name,
      value: i.name,
    };
  });
  return arr;
};
