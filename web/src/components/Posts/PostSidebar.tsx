import React from 'react';

import Divider from '@/ui/Divider';

import LatestPosts from '@/components/Posts/Sidebar/LatestPosts';

const PostSidebar = () => {
  return (
    <div className='rounded-xl pb-2'>
      <div className='sticky top-6 bg-white'>
        <div className='rounded-t-md border-2 border-t-primary-500  px-3 py-4'>
          <h2 className='text-lg font-semibold'>Latest</h2>
          <Divider className='my-2' />
          <LatestPosts />
        </div>
      </div>
    </div>
  );
};
export default PostSidebar;
