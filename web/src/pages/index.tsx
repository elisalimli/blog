import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import Posts from '@/components/Posts';
import Seo from '@/components/Seo';

import SectionContainer from '../components/SectionContainer';
import { createUrqlClient } from '../utils/createUrqlClient';

const HomePage = () => {
  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient)(HomePage);
