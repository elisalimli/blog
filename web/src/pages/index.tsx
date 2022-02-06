import * as React from 'react';

import Layout from '@/components/layout/Layout';

import Posts from '@/components/Posts';

export default function HomePage() {
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
}
