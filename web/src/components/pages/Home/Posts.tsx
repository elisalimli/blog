import Post from '@/components/pages/Home/Post/PostCard';
import Skeleton from '@/components/pages/PostSkeleton';
import { PostSnippetFragment } from '@/generated/graphql';
import React from 'react';
import NextImage from '../../NextImage';

interface PostProps {
  posts: PostSnippetFragment[];
  loading?: boolean;
}
const Posts = ({ posts, loading }: PostProps) => {
  return (
    <ul className='grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4'>
      {posts?.map((post) => (
        <Post post={post} key={`post-${post.id}`} />
      ))}
      <br />
      {loading &&
        Array.from({ length: 20 }).map((_, i) => (
          <Skeleton key={`blog-post-skeleton-${i}`} />
        ))}
    </ul>
  );
};

export default React.memo(Posts);
