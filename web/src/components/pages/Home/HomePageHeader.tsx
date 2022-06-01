import React from 'react';
import { ImPlay3 } from 'react-icons/im';
import Button from '@/ui/buttons/Button';
import Divider from '@/ui/Divider';
import NextImage from '@/components/NextImage';

const HomePageHeader = () => {
  return (
    <div className='relative h-72'>
      <NextImage
        layout='fill'
        className='pointer-events-none  w-full'
        imgClassName='rounded-3xl'
        src='https://cdn.britannica.com/21/195821-050-7860049D/Baku-blend-Azerbaijan-skyscrapers-buildings.jpg'
        objectFit='cover'
        alt='author image'
      />
      <div className='z-1 home-header-img-bottom-shadow relative flex h-full items-center justify-center rounded-3xl'>
        <div className='absolute text-white md:left-24'>
          <h1>Spider man</h1>

          <Divider className='mb-1 border-transparent' />
          <strong className='ml-1 text-3xl'>Land of the free</strong>
          <Divider className='my-1 border-transparent' />
          <Button variant='primary' className='px-8 py-3' borderRadius='3xl'>
            Watch
            <ImPlay3 className='ml-2' />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomePageHeader;
