import React from 'react';
import { ImPlay3 } from 'react-icons/im';

import Button from '@/ui/buttons/Button';
import UnstyledLink from '@/ui/links/UnstyledLink';

import NextImage from '@/components/NextImage';
import { PostSnippetFragment } from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';

interface PostProps {
  post: PostSnippetFragment;
}

const Post: React.FC<PostProps> = ({
  post: { id, title, url, tags, isVideo },
}) => {
  const ytId = useGetVideoId(url);

  return (
    <li className='relative max-w-full transition duration-500 hover:scale-105'>
      <UnstyledLink href={`/p/${id}`}>
        <div className='absolute top-0 right-0 z-10'>
          <ImPlay3 className='text-3xl text-white' />
        </div>
        <div className='relative'>
          <div className='absolute bottom-0 right-0 z-10 flex h-10  w-full items-end justify-end space-x-1 p-1'>
            {tags?.map((tag) => (
              <UnstyledLink
                className='text-center'
                key={`tag-${tag.id}`}
                href={`/t/${tag.id}`}
              >
                <Button className='rounded-lg border-0  bg-gray-100 bg-opacity-80 p-1 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-700'>
                  {tag?.name}
                </Button>
              </UnstyledLink>
            ))}
          </div>
          <NextImage
            useSkeleton
            // priority
            src={`http://i.ytimg.com/vi/${ytId}/mqdefault.jpg`}
            // src='https://theodorusclarence.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftheodorusclarence%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Cc_fill%2Car_5%3A2%2Cw_1200%2Ftheodorusclarence%2Fbanner%2Fmarkus-winkler-EcgyryGygeE-unsplash_vuovbv&w=3840&q=75'
            width={320}
            height={180}
            objectFit='cover' // change to suit your needs
            className='w-full'
            alt='Icon'
          />
        </div>
        <div className='flex items-center space-x-2 bg-white p-2'>
          <NextImage
            alt='author photo'
            imgClassName='rounded-full'
            width={32}
            height={32}
            src='https://lh3.googleusercontent.com/a-/AOh14GiSINvYwuxOvaE-6xcAcI2OeGXRXwhF7TN5Zqtz=s96-c'
          />
          <div className='flex flex-col text-xs text-gray-500'>
            <h4 className='truncate text-base font-medium text-gray-900'>
              {title}
            </h4>
            <a href='/' rel='author'>
              @anarrashidov
            </a>
            <div className='flex items-center space-x-2'>
              <p>7.8M views</p>
              <div className='h-1 w-1 rounded-full bg-gray-500'></div>
              <p>2 years ago</p>
            </div>
          </div>
        </div>
      </UnstyledLink>
    </li>
  );
};
export default React.memo(Post);
