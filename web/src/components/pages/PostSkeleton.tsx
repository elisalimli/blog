import React from 'react';

type SkeletonProps = React.ComponentPropsWithoutRef<'div'>;

function Skeleton({ ...rest }: SkeletonProps) {
  return (
    <div {...rest} className='w-full cursor-pointer'>
      <div className='mb-2 h-32 animate-shimmer bg-gray-300'></div>
      <div className='flex  items-center justify-between'>
        <div className='h-6 w-6  rounded-full bg-gray-200'></div>
        <div className='ml-1 w-full'>
          <div className='h-5 bg-gray-200'></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
