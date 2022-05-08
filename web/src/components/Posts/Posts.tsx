import Post from '@/components/Posts/Post/Post';
import Skeleton from '@/components/Posts/Post/PostSkeleton';
import SectionHeader from '@/components/Posts/PostSection/SectionHeader';
import { PostSnippetFragment } from '@/generated/graphql';
import Divider from '@/ui/Divider';
import React, { Fragment } from 'react';

interface PostProps {
  posts: PostSnippetFragment[];
  loading?: boolean;
}
const Posts = ({ posts, loading }: PostProps) => {
  return (
    <Fragment>
      <SectionHeader>LATEST POSTS</SectionHeader>
      {/* <Divider className='my-2' /> */}
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
    </Fragment>
  );
};

export default React.memo(Posts);
