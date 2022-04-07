import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import * as React from 'react';
import { ImGoogle } from 'react-icons/im';

import Button from '@/ui/buttons/Button';
import UnstyledLink from '@/ui/links/UnstyledLink';
import Loading from '@/ui/Loading';
import NavbarBrand from '@/ui/NavbarBrand';
import NextImage from '@/ui/NextImage';
import SectionContainer from '@/ui/SectionContainer';
import Seo from '@/ui/Seo';
import LgLogo from '@/ui/icons/LogoIcon';

import { useMeQuery } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

import Image from '../../public/images/people.png';

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
  return (
    <SectionContainer>
      <Seo title='Login ' description='Login page' />
      <div className='flex min-h-full w-full items-center justify-center'>
        <div className='rounded-lg bg-gray-100 py-10 px-6'>
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
            <UnstyledLink href='http://localhost:4000/auth/google'>
              <Button variant='light'>
                <div className='flex flex-row  items-center px-4'>
                  <ImGoogle className='mr-2' />
                  Continue with google
                </div>
              </Button>
            </UnstyledLink>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: false })(Login);
