import React from 'react';

import { PostSnippetFragment } from '../generated/graphql';
import NextImage from '@/ui/NextImage';
import UnstyledLink from '../ui/links/UnstyledLink';
import { ImPlay3 } from 'react-icons/im';

interface PostProps {
  post: PostSnippetFragment;
}

const IndividalPost: React.FC<PostProps> = ({
  post: { id, title, url, tags, isVideo },
}) => {
  const youtube_video_id = url
    .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
    .pop();

  return (
    <article>
      <h1 className='mb-2 text-center text-gray-900'>{title}</h1>
      <iframe
        width='100%'
        src={`https://www.youtube.com/embed/${youtube_video_id}`}
        // src={data?.post?.url}
        title='YouTube video player'
        frameBorder={0}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='h-[550px]  py-12'
      ></iframe>
    </article>
  );
};
export default IndividalPost;
