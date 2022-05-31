import { AppProps } from 'next/app';
import Head from 'next/head';
import { withUrqlClient } from 'next-urql';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import { createUrqlClient } from '@/utils/createUrqlClient';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          content='width=device-width,initial-scale=1,user-scalable=no,user-scalable=0'
          name='viewport'
        />
      </Head>
      {/* progress bar */}
      <NextNProgress />

      <ToastContainer
        theme='dark'
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* @todo fix this */}
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </>
  );
};

export default withUrqlClient(createUrqlClient)(MyApp);
