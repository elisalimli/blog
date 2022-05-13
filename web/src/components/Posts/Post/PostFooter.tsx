import React from 'react';
import Button from '../../../ui/buttons/Button';
import ArrowLink from '../../../ui/links/ArrowLink';

interface IPostFooterProps {
  title: string;
  views: string;
  postURL: string;
  date: string;
}

const PostFooter: React.FC<IPostFooterProps> = ({
  title,
  date,
  views,
  postURL,
}) => {
  return (
    <div className='mt-3 flex flex-col px-3 pb-4'>
      {/* Header */}
      <h4 className='truncate text-lg font-semibold text-gray-700'>{title}</h4>
      <p className='truncate'>Fugiat eni duis consectetur Lorem minim.</p>
      {/* Subtitle(date,views) */}
      <div className='flex items-center'>
        <p>{views}</p>
        <div className='mx-2 h-1 w-1 rounded-full bg-gray-500'></div>
        <p>{date}</p>
      </div>
      <div className='flex justify-start'>
        <ArrowLink href={postURL}>Watch</ArrowLink>
      </div>
    </div>
  );
};
export default PostFooter;
