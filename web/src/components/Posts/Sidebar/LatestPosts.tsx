import SidebarPost from '@/components/Posts/Sidebar/Post';
import { useLatestPostsQuery } from '@/generated/graphql';
import Divider from '@/ui/Divider';
import Layout from '@/ui/layout/Layout';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

const LIMIT = 6;

const LatestPosts: React.FC = () => {
  const [{ data }] = useLatestPostsQuery({
    variables: { input: { limit: LIMIT } },
  });
  const router = useRouter();
  const posts = useMemo(
    () => data?.posts?.posts?.filter((p) => p.id != router?.query?.postId),
    [data, router?.query?.postId]
  );

  return (
    <Layout>
      <h2 className='text-lg font-semibold'>Latest</h2>
      <Divider className='my-2' />
      {posts?.length ? (
        <ul className='mb-2 space-y-4 divide-y '>
          {posts.map((p) => (
            <SidebarPost key={`sidebar-latest-${p.id}`} {...p} />
          ))}
        </ul>
      ) : (
        <div>No posts added yet</div>
      )}
    </Layout>
  );
};
export default LatestPosts;
