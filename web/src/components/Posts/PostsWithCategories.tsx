import React, { useState } from 'react';

import Post from '@/components/Posts/Post';
import {
  PostSnippetFragment,
  useCategoriesQuery,
  usePostsByCategoryQuery,
} from '@/generated/graphql';
import PostSection from '@/components/Posts/PostSection/PostSection';
import SectionHeader from './PostSection/SectionHeader';
import Divider from '../../ui/Divider';
import Categories from '../Categories/Categories';
import Button from '../../ui/buttons/Button';
import { useCategoryIdStore } from '../../stores/useCategoryIdStore';
import Loading from '@/ui/Loading';
import CenteredLoading from '../CenteredLoading';

const PostsWithCategories = () => {
  const { categoryId } = useCategoryIdStore();
  const [{ data, fetching }] = usePostsByCategoryQuery({
    variables: { input: { categoryId } },
  });

  let content = (
    <ul className='grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4'>
      {data?.postsByCategory?.map((post) => (
        <Post post={post} key={`post-${post.id}`} />
      ))}
    </ul>
  );
  if (fetching) {
    content = (
      <div className='py-8'>
        <CenteredLoading />
      </div>
    );
  }
  return (
    <PostSection>
      <SectionHeader>Latest</SectionHeader>
      <Divider className='my-2' />
      <Categories />
      {content}
    </PostSection>
  );
};

export default PostsWithCategories;
