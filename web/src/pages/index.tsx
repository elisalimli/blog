import { withUrqlClient } from 'next-urql';
import React from 'react';

import Divider from '@/ui/Divider';
import Seo from '@/ui/Seo';

import Posts from '@/components/Posts/Posts';
import PostsWithCategories from '@/components/Posts/PostsWithCategories';
import SectionContainer from '@/components/SectionContainer';
import { PostSnippetFragment } from '@/generated/graphql';
import { usePostsQuery } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

const LIMIT = 8;
const HomePage = () => {
  const [{ data }] = usePostsQuery({
    variables: { input: { limit: LIMIT } },
  });
  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />

      <Posts posts={data?.posts?.posts as PostSnippetFragment[]} />
      <Divider className='my-8' />
      <PostsWithCategories />
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(HomePage);
