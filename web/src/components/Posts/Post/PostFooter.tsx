import React from 'react';
import AuthorPhoto from './AuthorPhoto';

interface IPostFooterProps {
  title: string;
  views: string;
  date: string;
}

const PostFooter: React.FC<IPostFooterProps> = ({ title, date, views }) => {
  return (
    <div className='mt-3 flex items-center space-x-2 px-3 pb-4'>
      {/* <AuthorPhoto /> */}
      <div className='flex flex-col text-xs text-gray-500'>
        <h4 className='truncate text-lg font-semibold text-gray-700'>
          {title}
        </h4>

        <div className='flex items-center space-x-2'>
          <p>{views}</p>
          <div className='h-1 w-1 rounded-full bg-gray-500'></div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
export default PostFooter;
