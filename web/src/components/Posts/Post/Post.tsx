import { PostSnippetFragment } from '@/generated/graphql';
import UnstyledLink from '@/ui/links/UnstyledLink';
import { useGetVideoId } from '@/utils/useGetVideoId';
import React from 'react';
import { ImPlay3 } from 'react-icons/im';
import PostFooter from '@/components/Posts/Post/PostFooter';
import Thumbnail from '@/components/Posts/Post/Thumbnail';

interface PostProps {
  post: PostSnippetFragment;
}

const Post: React.FC<PostProps> = ({ post: { id, title, url } }) => {
  const ytId = useGetVideoId(url);
  return (
    <li className='relative max-w-full rounded-2xl rounded-b-lg bg-gray-50 drop-shadow-md transition duration-500 hover:scale-105'>
      <UnstyledLink href={`/p/${id}`}>
        <div className='absolute top-0 right-0 z-10'>
          <ImPlay3 className='text-3xl text-white' />
        </div>
        <div className='relative'>
          <Thumbnail ytId={ytId as string} />
        </div>
        <PostFooter date='1 week ago' title={title} views='200K views' />
      </UnstyledLink>
    </li>
  );
};
export default React.memo(Post);
