import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import SectionContainer from '@/ui/SectionContainer';
import Seo from '@/ui/Seo';

import Posts from '@/components/Posts';
import { createUrqlClient } from '@/utils/createUrqlClient';

const HomePage = () => {
  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />
      <h1 className='mb-2 text-gray-900'>Latest</h1>
      <p className='mb-3 text-lg text-gray-500'>
        A blog created with Next.js and Tailwind.css
      </p>
      <hr className='mt-8 mb-10' />

      <Posts />
      {/* <div className='divide-y divide-gray-200'>
        <iframe
          width='100%'
          height='300px'
          src='https://www.youtube.com/embed/LnlKwzc_TNA'
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='py-12'
        ></iframe>{' '}
        <iframe
          className='py-12'
          width='100%'
          height='300px'
          src='https://www.youtube.com/embed/LnlKwzc_TNA'
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>{' '}
      </div> */}
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(HomePage);
