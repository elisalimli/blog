import React from 'react';
import { ImGoogle } from 'react-icons/im';

import Button from '@/ui/buttons/Button';
import UnstyledLink from '@/ui/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SectionContainer from '@/components/SectionContainer';
import Seo from '@/ui/Seo';

import Image from '@/../public/images/people.png';
import GoogleButton from '@/components/Login/GoogleButton';

const LoginPage: React.FC = () => {
  return (
    <SectionContainer>
      <Seo title='Login ' description='Login page' />
      <div className='flex min-h-full items-center justify-center'>
        <div className='rounded-lg rounded-t-md border-2 border-t-primary-500 bg-white py-10 px-6'>
          <div className='flex flex-col items-center'>
            <h1 className='font-sans text-3xl font-semibold  text-gray-700'>
              Excited you&apos;re joining us 😁
            </h1>
            <p className='text-800 mt-2 text-gray-800'>
              Get access to our fam in a few seconds
            </p>
            <NextImage className='mt-2' alt='some people' src={Image} />
          </div>
          <div className='m-4 flex justify-center'>
            <GoogleButton backToSamePage />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default LoginPage;
