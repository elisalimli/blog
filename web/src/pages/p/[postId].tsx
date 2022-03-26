import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import Seo from '@/ui/Seo';

import Posts from '@/components/Posts';
import SectionContainer from '../../ui/SectionContainer';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />
      <h1 className='mb-2 text-gray-900'>Latest</h1>
      <p className='mb-3 text-lg text-gray-500'>
        A blog created with Next.js and Tailwind.css
      </p>
      <hr className='mt-8 mb-10' />

      <Posts />
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
