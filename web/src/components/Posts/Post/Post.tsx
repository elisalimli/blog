import React from 'react';
import { ImPlay3 } from 'react-icons/im';

import Button from '@/ui/buttons/Button';
import UnstyledLink from '@/ui/links/UnstyledLink';

import NextImage from '@/components/NextImage';
import { PostSnippetFragment, TagSnippetFragment } from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';
import Tags from '@/components/Posts/Post/Tags/Tags';
import Thumbnail from './Thumbnail';
import AuthorPhoto from './AuthorPhoto';
import PostFooter from './PostFooter';

interface PostProps {
  post: PostSnippetFragment;
}

const Post: React.FC<PostProps> = ({
  post: { id, title, url, tags, isVideo },
}) => {
  const ytId = useGetVideoId(url);
  return (
    <li className='relative max-w-full rounded-2xl rounded-b-lg bg-gray-50 shadow-sm transition duration-500 hover:scale-105'>
      <UnstyledLink href={`/p/${id}`}>
        <div className='absolute top-0 right-0 z-10'>
          <ImPlay3 className='text-3xl text-white' />
        </div>
        <div className='relative'>
          <div className='absolute bottom-0 right-0 z-10 flex h-10  w-full items-end justify-end space-x-1 p-1'>
            <Tags tags={tags as TagSnippetFragment[]} />
          </div>
          <Thumbnail ytId={ytId as string} />
        </div>
        <PostFooter date='1 week ago' title={title} views='200K views' />
      </UnstyledLink>
    </li>
  );
};
export default React.memo(Post);
