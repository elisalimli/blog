import Categories from '@/components/Categories/Categories';
import HomePageHeader from '@/components/pages/Home/HomePageHeader';
import Posts from '@/components/pages/Home/Posts';
import SectionHeader from '@/components/Section/SectionHeader';
import { withLayout } from '@/components/utils/withLayout';
import { PostSnippetFragment, useLatestPostsQuery } from '@/generated/graphql';
import Divider from '@/ui/Divider';
import Seo from '@/ui/Seo';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import React, { Fragment } from 'react';

const LIMIT = 8;
const HomePage = () => {
  const [{ data }] = useLatestPostsQuery({
    variables: { input: { limit: LIMIT } },
  });

  return (
    <Fragment>
      <Seo title='Home' description='Home' />

      <HomePageHeader />
      <SectionHeader>LATEST POSTS</SectionHeader>

      <Posts posts={data?.posts?.posts as PostSnippetFragment[]} />
      <Divider className='my-8' />
      <SectionHeader>CATEGORIES</SectionHeader>
      <Categories />
    </Fragment>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(
  withLayout(HomePage)
);
