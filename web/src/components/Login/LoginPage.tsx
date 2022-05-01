import Image from '@/../public/images/people.png';
import GoogleButton from '@/components/Login/GoogleButton';
import NextImage from '@/components/NextImage';
import Seo from '@/ui/Seo';
import React, { Fragment } from 'react';

const LoginPage: React.FC = () => {
  return (
    <Fragment>
      <Seo title='Login ' description='Login page' />
      <div className='flex min-h-full items-center justify-center'>
        <div className='mt-[100px] rounded-lg rounded-t-md border-2 border-t-primary-500 bg-white py-10 px-6'>
          <div className='flex flex-col items-center'>
            <h1 className='font-sans text-3xl font-semibold  text-gray-700'>
              Excited you&apos;re joining us 😁
            </h1>
            <p className='text-800 mt-2 text-gray-800'>
              Get access to our fam in a few seconds
            </p>
            <NextImage
              useSkeleton
              className='mt-2'
              alt='some people'
              src={Image}
            />
          </div>
          <div className='m-4 flex justify-center'>
            <GoogleButton>Continue with google</GoogleButton>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LoginPage;
