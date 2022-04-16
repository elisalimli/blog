import React from 'react';

import Divider from '@/ui/Divider';
import Layout from '@/ui/layout/Layout';

import Post from '@/components/Posts/Sidebar/Post';
import { usePostsQuery } from '@/generated/graphql';

const LIMIT = 4;

const LatestPosts: React.FC = () => {
  const [{ data }] = usePostsQuery({
    variables: { input: { limit: LIMIT } },
  });
  return (
    <Layout>
      <h2 className='text-lg font-semibold'>Latest</h2>
      <Divider className='my-2' />
      {data?.posts?.posts?.length ? (
        <ul className='mb-2 space-y-4 divide-y '>
          {data?.posts.posts?.slice(0, LIMIT).map((p) => (
            <Post key={`sidebar-latest-${p.id}`} {...p} />
          ))}
        </ul>
      ) : (
        <div>No posts added yet</div>
      )}
    </Layout>
  );
};
export default LatestPosts;
