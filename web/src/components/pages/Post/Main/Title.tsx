import React from 'react';

const PostHeader: React.FC = ({ children }) => {
  return <h1 className='my-8 text-4xl text-gray-900'>{children}</h1>;
};
export default PostHeader;
