import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import React from 'react';

import LoginPage from '@/components/pages/Login/LoginPage';
import { useMeQuery } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

import CenteredLoading from '@/components/CenteredLoading';
import { withLayout } from '@/components/utils/withLayout';

const Login = () => {
  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();
  if (fetching) {
    return <CenteredLoading />;
  } else if (data?.me && !router.query.next) {
    router.push('/');
  }
  return <LoginPage />;
};

export default withUrqlClient(createUrqlClient, { ssr: false })(
  withLayout(Login)
);
