import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

import LayoutWrapper from '@/components/LayoutWrapper';
import NextNProgress from 'nextjs-progressbar';

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

export default MyApp;
