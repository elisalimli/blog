/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import ReactPlayer from 'react-player';

import { PostSnippetFragment, useMeQuery } from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';

import Tag from '../Post/Tags/Tag';
import NextImage from '../../NextImage';
import PostHeader from './PostHeader';
import PostDetails from './PostDetails';

interface PostProps {
  post: PostSnippetFragment;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  const { title, url, tags, description } = post;
  const ytId = useGetVideoId(url);
  // @todo change this author image

  return (
    <article>
      <section>
        <header className='mb-10 flex flex-col items-center'>
          <PostHeader>{title}</PostHeader>
          <PostDetails {...post} />
        </header>
        <p className='my-4 text-xl leading-10 tracking-normal text-gray-900'>
          {description}
        </p>

        {/* @todo fix this(typescript)!! */}
        {/* @ts-ignore */}
        <ReactPlayer
          controls
          width='100%'
          height={500}
          url={`https://www.youtube.com/embed/${ytId}`}
        />
      </section>
    </article>
  );
};
export default PostPage;
