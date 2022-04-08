import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

import LayoutWrapper from '@/components/LayoutWrapper';
import NextNProgress from 'nextjs-progressbar';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <NextNProgress />

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}

export default withUrqlClient(createUrqlClient)(MyApp);
