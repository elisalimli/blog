import React from 'react';

import { PostSnippetFragment } from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';
import ReactPlayer from 'react-player';
import Divider from '@/ui/Divider';

interface PostProps {
  post: PostSnippetFragment;
}

const PostPage: React.FC<PostProps> = ({ post: { title, url } }) => {
  const ytId = useGetVideoId(url);

  return (
    <article>
      <h1 className='mt-4 text-center text-6xl font-semibold text-gray-900'>
        {title}
      </h1>
      <Divider className='my-6' />
      <ReactPlayer
        width='100%'
        height={500}
        url={`https://www.youtube.com/embed/${ytId}`}
      />
    </article>
  );
};
export default PostPage;
