import ArrowLink from '@/ui/links/ArrowLink';
import React from 'react';
import { PostSnippetFragment } from '@/generated/graphql';
import dayjs from 'dayjs';

interface IPostFooterProps {
  post: PostSnippetFragment;
  postURL: string;
}

const PostFooter: React.FC<IPostFooterProps> = ({
  post: { createdAt, title, description },
  postURL,
}) => {
  return (
    <div className='mt-3 flex flex-col px-3 pb-4'>
      {/* Header */}
      <h4 className='truncate text-lg font-semibold text-gray-700'>{title}</h4>
      {/* Description */}
      <p className='truncate'>{description}</p>
      {/* Subtitle(date,views) */}
      <div className='flex justify-between md:flex-col '>
        <div className='flex items-center'>
          <p>200K views</p>
          <div className='mx-2 h-1 w-1 rounded-full bg-gray-500'></div>
          <p>{dayjs(createdAt).format('MMM D, YYYY')}</p>
        </div>
        <ArrowLink href={postURL}>Watch</ArrowLink>
      </div>
    </div>
  );
};
export default PostFooter;
