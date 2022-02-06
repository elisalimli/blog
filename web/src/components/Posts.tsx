import Layout from '@/components/layout/Layout';
import { withUrqlClient } from 'next-urql';
import * as React from 'react';

const Posts = () => {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      {/* <Seo /> */}

      <main className='layout'>
        <h1>Hello World</h1>
        <Posts />
      </main>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Posts);
