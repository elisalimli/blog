import Post from '@/components/Posts/Post';
import { PostSnippetFragment } from '@/generated/graphql';
import React from 'react';
import Divider from '@/ui/Divider';
import PostSection from '@/components/Posts/PostSection/PostSection';
import SectionHeader from '@/components/Posts/PostSection/SectionHeader';
import Skeleton from '@/components/Posts/PostSkeleton';

interface PostProps {
  posts: PostSnippetFragment[];
  loading?: boolean;
}
const Posts = ({ posts, loading }: PostProps) => {
  return (
    <PostSection>
      <SectionHeader>Featured</SectionHeader>
      <Divider className='my-2' />
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
    </PostSection>
  );
};

export default React.memo(Posts);
