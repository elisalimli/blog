import React from 'react';

const PostHeader: React.FC = ({ children }) => {
  return (
    <h1 className='my-8 text-center text-5xl text-gray-800'>{children}</h1>
  );
};
export default PostHeader;
