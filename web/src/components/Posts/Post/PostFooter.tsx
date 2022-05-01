import React from 'react';
import AuthorPhoto from './AuthorPhoto';

interface IPostFooterProps {
  title: string;
  views: string;
  date: string;
}

const PostFooter: React.FC<IPostFooterProps> = ({ title, date, views }) => {
  return (
    <div className='flex items-center space-x-2 p-2'>
      <AuthorPhoto />
      <div className='flex flex-col text-xs text-gray-500'>
        <h4 className='truncate text-base font-medium text-gray-900'>
          {title}
        </h4>
        <a href='/' rel='author'>
          @anarrashidov
        </a>
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
