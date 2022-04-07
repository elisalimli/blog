import React from 'react';

import { usePostsQuery } from '@/generated/graphql';
import Post from '@/components/Posts/Sidebar/Post';

const LIMIT = 4;

const LatestPosts: React.FC = () => {
  const [{ data }] = usePostsQuery({
    variables: { input: { limit: LIMIT } },
  });
  return data?.posts?.posts?.length ? (
    <ul className='mb-2 space-y-4 divide-y '>
      {data?.posts.posts?.map((p) => (
        <Post key={`sidebar-latest-${p.id}`} {...p} />
      ))}
    </ul>
  ) : (
    <div>No posts added yet</div>
  );
};
export default LatestPosts;
