import React from 'react';

import Post from '@/components/Posts/Post';
import { PostSnippetFragment } from '@/generated/graphql';
interface PostProps {
  posts: PostSnippetFragment[];
}
const Posts = ({ posts }: PostProps) => {
  return (
    <ul className='mb-24 grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4'>
      {posts?.map((post) => (
        <Post post={post} key={`post-${post.id}`} />
      ))}
    </ul>
  );
};

export default Posts;
