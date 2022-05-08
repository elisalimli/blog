import Posts from '@/components/Posts/Posts';
import PostsWithCategories from '@/components/Posts/PostsWithCategories';
import { withLayout } from '@/components/utils/withLayout';
import { PostSnippetFragment, usePostsQuery } from '@/generated/graphql';
import Divider from '@/ui/Divider';
import Seo from '@/ui/Seo';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import React, { Fragment } from 'react';
import { ImPlay3 } from 'react-icons/im';
import Button from '@/ui/buttons/Button';
import SectionHeader from '@/components/Posts/PostSection/SectionHeader';
import HomePageHeader from '@/components/pages/Home/HomePageHeader';

const LIMIT = 8;
const HomePage = () => {
  const [{ data }] = usePostsQuery({
    variables: { input: { limit: LIMIT, cursor: null } },
  });

  return (
    <Fragment>
      <Seo title='Home' description='Home' />
      <HomePageHeader />
      <SectionHeader>LATEST POSTS</SectionHeader>

      <Posts posts={data?.posts?.posts as PostSnippetFragment[]} />
      {/* <Divider className='my-8' /> */}
      {/* <PostsWithCategories /> */}
    </Fragment>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(
  withLayout(HomePage)
);
