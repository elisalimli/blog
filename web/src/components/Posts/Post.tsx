import NextImage from '@/components/NextImage';
import { PostSnippetFragment, useMeQuery } from '@/generated/graphql';
import Button from '@/ui/buttons/Button';
import UnstyledLink from '@/ui/links/UnstyledLink';
import { useGetVideoId } from '@/utils/useGetVideoId';
import React from 'react';
import { ImPlay3 } from 'react-icons/im';

interface PostProps {
  post: PostSnippetFragment;
}

const Post: React.FC<PostProps> = ({
  post: { id, title, url, tags, isVideo },
}) => {
  const ytId = useGetVideoId(url);

  const [{ data }] = useMeQuery();
  return (
    <li className='relative max-w-full'>
      <UnstyledLink href={`/p/${id}`}>
        <div className='absolute top-0 right-0 z-50'>
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
                <Button className=' rounded-lg border-gray-200 bg-gray-100 bg-opacity-80  p-1 text-sm text-gray-700'>
                  {tag?.name}
                </Button>
              </UnstyledLink>
            ))}
          </div>
          <NextImage
            priority
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
            alt='profile photo'
            imgClassName='rounded-full'
            width={32}
            height={32}
            src={data?.me?.picture as string}
          />
          <div className='flex flex-col text-xs text-gray-500'>
            <h2 className='text-base font-medium text-gray-900'>
              {/* {title} */}
              {title.slice(0, 24)}...
            </h2>
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
export default Post;
