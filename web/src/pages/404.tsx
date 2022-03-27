import * as React from 'react';

import Layout from '@/ui/layout/Layout';
import Seo from '@/ui/Seo';

import Button from '../ui/buttons/Button';
import UnstyledLink from '../ui/links/UnstyledLink';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo description='Not found page' templateTitle='Not Found' />
      <div className='mt-24 flex flex-col py-10 px-2 md:flex-row md:justify-center'>
        <h1 className='leading-16 mr-6 border-gray-300 px-6 text-8xl font-extrabold tracking-tight text-gray-900 md:border-r-2'>
          404
        </h1>
        <div>
          <p className='mb-2 text-3xl font-bold leading-normal'>
            Sorry we couldn't find this page.
          </p>
          <p className='mb-6 font-light'>
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <UnstyledLink href='/'>
            <Button variant='primary'>Back To Homepage</Button>
          </UnstyledLink>
        </div>
      </div>
    </Layout>
  );
}
