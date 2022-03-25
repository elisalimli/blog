import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

import LayoutWrapper from '../ui/LayoutWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}

export default MyApp;
