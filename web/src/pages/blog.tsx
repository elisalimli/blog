import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Posts from '@/components/Posts/Posts';
import {
  GetPostsInput,
  PostSnippetFragment,
  usePostsQuery,
} from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

import SectionContainer from '../components/SectionContainer';
import Divider from '../ui/Divider';
import Seo from '../ui/Seo';

const LIMIT = 15;

const BlogPage = () => {
  const [variables, setVariables] = useState<GetPostsInput>({
    limit: LIMIT,

    cursor: null,
  });
  const [{ data, stale }] = usePostsQuery({
    variables: { input: variables },
  });

  const onLoadMore = () => {
    const posts = data?.posts?.posts;
    if (posts)
      setVariables({
        ...variables,
        cursor: posts[posts.length - 1]?.createdAt,
      });
  };

  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />
      <h1 className='mb-2 text-gray-900'>All Posts</h1>
      <p className='mb-3 text-lg text-gray-500'>
        A blog created with Next.js and Tailwind.css
      </p>
      <Divider className='mt-8 mb-10' />
      <InfiniteScroll
        loader={undefined}
        dataLength={data?.posts?.posts?.length || 0}
        next={onLoadMore}
        hasMore={data?.posts?.hasMore || false}
        style={{ overflowY: 'hidden' }}
      >
        <Posts
          loading={stale}
          posts={data?.posts?.posts as PostSnippetFragment[]}
        />
      </InfiniteScroll>
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(BlogPage);
