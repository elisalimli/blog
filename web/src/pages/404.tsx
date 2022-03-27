import * as React from 'react';

import Layout from '@/ui/layout/Layout';
import Seo from '@/ui/Seo';

import NotFound from '@/components/404';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo description='Not found page' templateTitle='Not Found' />
      <NotFound />
    </Layout>
  );
}
