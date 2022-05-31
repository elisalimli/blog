/* eslint-disable @typescript-eslint/ban-ts-comment */
import PostDetails from '@/components/pages/Post/Main/Info';
import { PostTagSnippetFragment } from '@/generated/graphql';
import Tag from '@/ui/Tag';
import { useGetVideoId } from '@/utils/useGetVideoId';
import React from 'react';
import { AiOutlineTag } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import Title from '@/components/pages/Post/Main/Title';

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
          <Title>{title}</Title>
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
