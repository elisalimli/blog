import Posts from '@/components/Posts/Posts';
import PostsWithCategories from '@/components/Posts/PostsWithCategories';
import { PostSnippetFragment, usePostsQuery } from '@/generated/graphql';
import Divider from '@/ui/Divider';
import Seo from '@/ui/Seo';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import React, { Fragment } from 'react';
import { withLayout } from '@/components/utils/withLayout';

const LIMIT = 8;
const HomePage = () => {
  const [{ data }] = usePostsQuery({
    variables: { input: { limit: LIMIT, cursor: null } },
  });
  console.log('here', data);

  return (
    <Fragment>
      <Seo title='Home' description='Home' />

      <Posts posts={data?.posts?.posts as PostSnippetFragment[]} />
      <Divider className='my-8' />
      <PostsWithCategories />
    </Fragment>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(
  withLayout(HomePage)
);
