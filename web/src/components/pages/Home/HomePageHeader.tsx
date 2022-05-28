import React from 'react';
import { ImPlay3 } from 'react-icons/im';
import Button from '@/ui/buttons/Button';
import Divider from '@/ui/Divider';

const HomePageHeader = () => {
  return (
    <div
      style={{
        // @todo change this
        backgroundImage:
          'url(https://cdn.britannica.com/21/195821-050-7860049D/Baku-blend-Azerbaijan-skyscrapers-buildings.jpg)',
      }}
      className='mb-8 rounded-3xl text-white'
    >
      <div className='img-bottom-shadow relative flex h-80 w-full flex-col items-center justify-center rounded-3xl'>
        <div className='absolute md:left-24'>
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
