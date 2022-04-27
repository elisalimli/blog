import { Router, useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Divider from '@/ui/Divider';
import Seo from '@/ui/Seo';

import Posts from '@/components/Posts/Posts';
import SectionContainer from '@/components/SectionContainer';
import {
  GetPostsBySearchInput,
  PostSnippetFragment,
  usePostsBySearchQuery,
} from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

const LIMIT = 20;
const Results = () => {
  const router = useRouter();
  const [variables, setVariables] = useState<GetPostsBySearchInput>({
    limit: LIMIT,
    query: router?.query?.query,
    cursor: null,
  });

  const [{ data, stale }] = usePostsBySearchQuery({
    variables: {
      input: variables,
    },
  });
  console.log(variables);

  useEffect(() => {
    setVariables({ ...variables, query: router?.query?.query });
  }, [router?.query?.query]);
  const onLoadMore = () => {
    const posts = data?.postsBySearch?.posts;
    if (posts)
      setVariables({
        ...variables,
        cursor: posts[posts.length - 1].createdAt,
      });
  };

  return (
    <SectionContainer>
      {/* @todo change this */}
      <Seo title='Search' description='Search result' />
      <h1 className='mb-2 text-gray-900'>
        Search results for &apos;{router?.query?.query}&apos;
      </h1>
      <Divider className='mt-8 mb-10' />
      <InfiniteScroll
        loader={undefined}
        dataLength={data?.postsBySearch?.posts?.length || 0}
        next={onLoadMore}
        hasMore={data?.postsBySearch?.hasMore || false}
        style={{ overflowY: 'hidden' }}
      >
        <Posts
          loading={stale}
          posts={data?.postsBySearch?.posts as PostSnippetFragment[]}
        />
      </InfiniteScroll>
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Results);
