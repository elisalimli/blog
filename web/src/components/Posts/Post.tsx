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
    <UnstyledLink href={`/p/${id}`}>
      <li className='relative max-w-full rounded-md border border-gray-300'>
        <div className='absolute bottom-0 right-0 z-10 flex h-10  w-full items-center justify-end'>
          {tags?.map((tag) => (
            <UnstyledLink key={`tag-${tag.id}`} href={`/t/${tag.id}`}>
              <Button className='mr-2 rounded-lg border-gray-200 bg-gray-100 bg-opacity-80  p-1 text-sm text-gray-700'>
                {tag?.name}
              </Button>
            </UnstyledLink>
          ))}
        </div>
        <div className='absolute top-0 right-0 z-50'>
          <ImPlay3 className='text-3xl text-white' />
        </div>
        <NextImage
          priority
          src={`http://i.ytimg.com/vi/${ytId}/mqdefault.jpg`}
          // src='https://theodorusclarence.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftheodorusclarence%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Cc_fill%2Car_5%3A2%2Cw_1200%2Ftheodorusclarence%2Fbanner%2Fmarkus-winkler-EcgyryGygeE-unsplash_vuovbv&w=3840&q=75'
          width={320}
          height={180}
          objectFit='cover' // change to suit your needs
          className='w-full rounded-sm  bg-cover'
          alt='Icon'
        />
      </li>
    </UnstyledLink>
  );
};
export default Post;
