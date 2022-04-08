import Login from '@/components/Login/Login';
import LatestPosts from '@/components/Posts/Sidebar/LatestPosts';
import React from 'react';

const PostSidebar = () => {
  return (
    <div className='col-span-1 rounded-xl pb-2 2xl:col-span-2'>
      <div className='sticky top-6 space-y-4'>
        {[Login, LatestPosts].map((C, i) => (
          <div
            key={`sidebar-section-${i}`}
            className='rounded-t-md border-2 border-t-primary-500 bg-white px-3 py-4'
          >
            <C />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostSidebar;
