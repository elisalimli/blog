import React from 'react';
import Button from '../../../ui/buttons/Button';

interface IPostFooterProps {
  title: string;
  views: string;
  date: string;
}

const PostFooter: React.FC<IPostFooterProps> = ({ title, date, views }) => {
  return (
    <div className='mt-3 flex flex-col px-3 pb-4'>
      {/* Header */}
      <h4 className='truncate text-lg font-semibold text-gray-700'>{title}</h4>
      {/* Subtitle(date,views) */}
      <div className='flex items-center'>
        <p>{views}</p>
        <div className='mx-2 h-1 w-1 rounded-full bg-gray-500'></div>
        <p>{date}</p>
      </div>
      <div className='flex justify-start'>
        <Button variant='ghost' className='p-0 pt-2' borderRadius='lg'>
          Watch →
        </Button>
      </div>
    </div>
  );
};
export default PostFooter;
