import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import SectionContainer from '@/ui/SectionContainer';
import Seo from '@/ui/Seo';

import Posts from '@/components/Posts/Posts';
import { PostSnippetFragment } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

import { usePostsQuery } from '../generated/graphql';

const LIMIT = 9;
const HomePage = () => {
  const [{ data }] = usePostsQuery({
    variables: { input: { limit: LIMIT } },
  });
  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />
      <h1 className='mb-2 text-gray-900'>Latest</h1>
      <p className='mb-3 text-lg text-gray-500'>
        A blog created with Next.js and Tailwind.css 2
      </p>
      <hr className='mt-8 mb-10' />
      <Posts posts={data?.posts?.posts as PostSnippetFragment[]} />
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(HomePage);
