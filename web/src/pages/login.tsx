import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import React from 'react';

import Loading from '@/ui/Loading';

import LoginPage from '@/components/Login/LoginPage';
import { useMeQuery } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

const Login = () => {
  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();
  if (fetching) {
    return (
      <div className='flex justify-center'>
        <Loading />
      </div>
    );
  } else if (data?.me && !router.query.next) {
    router.push('/');
  }
  return <LoginPage />;
};
export default withUrqlClient(createUrqlClient, { ssr: false })(Login);
