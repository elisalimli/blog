import React from 'react';

import { PostSnippetFragment } from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';

interface PostProps {
  post: PostSnippetFragment;
}

const IndividalPost: React.FC<PostProps> = ({ post: { title, url } }) => {
  const ytId = useGetVideoId(url);

  return (
    <article>
      <h1 className='mb-2 text-center text-gray-900'>{title}</h1>
      <iframe
        width='100%'
        src={`https://www.youtube.com/embed/${ytId}`}
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
