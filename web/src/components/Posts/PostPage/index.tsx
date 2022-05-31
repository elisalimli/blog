/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  PostTagSnippetFragment,
  TagSnippetFragment,
} from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';
import React from 'react';
import { AiOutlineTag } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import Tag from '../Post/Tags/Tag';
import PostDetails from './PostDetails';
import PostHeader from './PostHeader';

interface PostProps {
  post: PostTagSnippetFragment;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  const { title, url, tags, description } = post;
  const ytId = useGetVideoId(url);
  // @todo change this author image
  return (
    <article>
      <section>
        <header className='mb-10'>
          <PostDetails {...post} />
          <PostHeader>{title}</PostHeader>
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
        <div className='my-4 flex items-center'>
          <AiOutlineTag size={20} className='mr-2 text-gray-400' />
          <div className='flex items-center space-x-1'>
            {tags?.map((t) => (
              <Tag key={`post-tag-${t.id}`} {...t} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};
export default PostPage;
