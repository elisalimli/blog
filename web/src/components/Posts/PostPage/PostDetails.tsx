import React from 'react';
import { PostSnippetFragment } from '@/generated/graphql';
import dayjs from 'dayjs';
import NextImage from '../../NextImage';

type IPostDetailsProps = PostSnippetFragment;

// post date,author name etc.
const PostDetails: React.FC<IPostDetailsProps> = ({ title, createdAt }) => {
  return (
    <div className='flex items-center'>
      <NextImage
        alt={`Post - ${title} card image`}
        className='mr-4'
        width={32}
        height={32}
        imgClassName='rounded-full'
        // @prod replace this with author photo
        src={'https://picsum.photos/32/32'}
      />

      <span className='flex font-medium text-gray-900'>
        Anar Rashidov
        <span className='flex items-center text-sm font-light text-gray-500'>
          <div className='mx-2 h-1 w-1 rounded-full bg-gray-600'></div>
          {dayjs(createdAt).format('MMM D, YYYY')}
        </span>
      </span>
    </div>
  );
};
export default PostDetails;
