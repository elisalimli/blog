import React from 'react';
import Divider from '@/ui/Divider';
import Layout from '@/ui/layout/Layout';
import Post from '@/components/Posts/Post';
import GoogleButton from './GoogleButton';
import { useMeQuery } from '../../generated/graphql';
import Loading from '@/ui/Loading';
import Button from '../../ui/buttons/Button';

const Login: React.FC = () => {
  const [{ data, fetching }] = useMeQuery();
  console.log('me', data);
  let content = <Loading />;
  if (data?.me) {
    const { name } = data?.me;
    content = (
      <div>
        <h2 className='text-center text-lg'>
          Welcome,<span className='block underline'>{name}</span>
        </h2>
        <Divider />
        <div className='my-4 rounded-sm border  border-primary-400 bg-primary-100 p-4'>
          <p className='text-center text-base font-semibold text-primary-800'>
            Thank you for choosing us!
          </p>
          <p className='text-center text-primary-800'>Click to logout.</p>
        </div>
        <Button className='w-full' variant='outline'>
          Logout
        </Button>
      </div>
    );
  } else if (!data?.me) {
    content = (
      <Layout>
        <h2 className='text-center text-lg font-semibold'>Sign in</h2>
        <Divider className='my-2' />
        <div className='mt-6 mb-2 flex justify-center'>
          <GoogleButton>Sign in</GoogleButton>
        </div>
      </Layout>
    );
  }
  return content;
};
export default Login;
