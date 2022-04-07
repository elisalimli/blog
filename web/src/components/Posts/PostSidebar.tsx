import Divider from '@/ui/Divider';
import React from 'react';
import LatestPosts from '@/components/Posts/Sidebar/LatestPosts';

const PostSidebar = () => {
  return (
    <div className='relative rounded-xl bg-white pb-2'>
      <div className='sticky top-6 rounded-t-md border-2 border-t-primary-500 px-3 py-4'>
        <h2 className='text-lg font-semibold'>Latest</h2>
        <Divider className='my-2' />
        <LatestPosts />
      </div>
    </div>
  );
};
export default PostSidebar;
