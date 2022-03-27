import React from 'react';

import Post from '@/components/Post';
import { PostSnippetFragment } from '@/generated/graphql';
interface PostProps {
  posts: PostSnippetFragment[];
}
const Posts = ({ posts }: PostProps) => {
  return (
    <>
      <ul className='mb-24 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {posts?.map((post) => (
          <Post post={post} key={`post-${post.id}`} />
        ))}
      </ul>
      {/* {data?.posts?.hasMore && (
        <div className='mt-12 flex justify-center'>
          <Button
            className='grid px-2 py-1 text-sm'
            variant='outline'
            onClick={() => {
              const posts = data?.posts?.posts;
              if (posts?.length) {
                onLoadMore({
                  limit: LIMIT,
                  cursor: posts[posts.length - 1].createdAt,
                });
              }
            }}
            isLoading={stale}
          >
            Load more
          </Button>
        </div>
      )} */}
    </>
  );
};

export default Posts;
