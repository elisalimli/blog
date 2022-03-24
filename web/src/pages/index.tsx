import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import Seo from '@/ui/Seo';

import Posts from '@/components/Posts';

import SectionContainer from '../ui/SectionContainer';
import { createUrqlClient } from '../utils/createUrqlClient';

const HomePage = () => {
  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />
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
export default withUrqlClient(createUrqlClient)(HomePage);
