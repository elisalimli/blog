import React from 'react';
import { ImPlay3 } from 'react-icons/im';
import Button from '@/ui/buttons/Button';
import Divider from '@/ui/Divider';

const HomePageHeader = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://cdn.britannica.com/21/195821-050-7860049D/Baku-blend-Azerbaijan-skyscrapers-buildings.jpg)',
      }}
      className='mb-8 rounded-3xl text-white'
    >
      <div
        className='relative flex h-[300px] w-full flex-col items-center justify-center rounded-3xl'
        style={{
          backgroundImage: 'linear-gradient(180deg,rgba(51,51,51,0),#484747)',
        }}
      >
        <div className='absolute left-36'>
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
