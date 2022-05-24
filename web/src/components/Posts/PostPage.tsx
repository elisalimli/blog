/* eslint-disable @typescript-eslint/ban-ts-comment */
import dayjs from 'dayjs';
import React from 'react';
import ReactPlayer from 'react-player';

import { PostSnippetFragment, useMeQuery } from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';

import Tag from './Post/Tags/Tag';
import NextImage from '../NextImage';

interface PostProps {
  post: PostSnippetFragment;
}

const PostPage: React.FC<PostProps> = ({
  post: { title, url, createdAt, tags },
}) => {
  const ytId = useGetVideoId(url);
  // @todo change this author image
  const [{ data }] = useMeQuery();
  console.log('createdAt', createdAt);

  return (
    <article>
      {/* <header className='flex items-center justify-between'>
        <div className='flex'>
          <NextImage
            className='mr-4'
            width={50}
            height={50}
            imgClassName='rounded-full'
            src={data?.me?.picture as string}
          />
          <div className='flex flex-col justify-between'>
            <UnstyledLink className='mb-1' href='/about'>
              Anar Reshidov
            </UnstyledLink>
            <p className='text-gray-500'>
              {dayjs(createdAt).format('MMM D, YYYY')}
            </p>
          </div>
        </div>
        <div className='mr-2'>
          <SocialLinks />
        </div>
      </header> */}
      <section>
        <header className='mb-10 flex flex-col items-center'>
          <h1 className='my-8 text-center text-5xl text-gray-800'>{title}</h1>
          <div className='flex items-center'>
            <NextImage
              alt={`Post - ${title} card image`}
              className='mr-4'
              width={32}
              height={32}
              imgClassName='rounded-full'
              src={data?.me?.picture as string}
            />

            <span className='flex font-medium text-gray-900'>
              Posted by Anar Rashidov
              <span className='flex items-center text-gray-600'>
                <div className='mx-2 h-1 w-1 rounded-full bg-gray-400'></div>
                {dayjs(createdAt).format('MMM D, YYYY')}
              </span>
            </span>
          </div>
          <div>
            {tags?.map((t) => (
              <Tag key={`post-tag-${t.id}`} {...t} />
            ))}
          </div>
        </header>
        {/* @todo add desc */}
        <p className='my-4 text-xl leading-10 tracking-normal text-gray-900'>
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description
        </p>
        {/* <Divider className='my-6' /> */}

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
