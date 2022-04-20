import Post from '@/components/Posts/Post';
import { PostSnippetFragment } from '@/generated/graphql';
import React from 'react';
import { content } from 'tailwindcss/defaultTheme';
import Divider from '../../ui/Divider';
import PostSection from './PostSection/PostSection';
import SectionHeader from './PostSection/SectionHeader';

interface PostProps {
  posts: PostSnippetFragment[];
}
const Posts = ({ posts }: PostProps) => {
  return (
    <PostSection>
      <SectionHeader>Featured</SectionHeader>
      <Divider className='my-2' />
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {posts?.map((post) => (
          <Post post={post} key={`post-${post.id}`} />
        ))}
      </ul>
    </PostSection>
  );
};

export default React.memo(Posts);
