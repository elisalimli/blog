import React from 'react';

import { PostSnippetFragment } from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';
import ReactPlayer from 'react-player';

interface PostProps {
  post: PostSnippetFragment;
}

const PostPage: React.FC<PostProps> = ({ post: { title, url } }) => {
  const ytId = useGetVideoId(url);

  return (
    <article>
      <h1 className='mb-2 text-center text-6xl font-semibold text-gray-900'>
        {title}
      </h1>
      <ReactPlayer
        width='100%'
        height={500}
        url={`https://www.youtube.com/embed/${ytId}`}
      />
      {/* 
      <iframe
        width='100%'
        src=
        // src={data?.post?.url}
        title='YouTube video player'
        frameBorder={0}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe> */}
    </article>
  );
};
export default PostPage;
