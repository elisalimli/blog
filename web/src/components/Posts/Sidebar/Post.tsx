import React, { useMemo } from 'react';
import NextImage from '@/components/NextImage';
import UnderlineLink from '@/ui/links/UnderlineLink';
import { useGetVideoId } from '@/utils/useGetVideoId';
import { PostSnippetFragment } from '@/generated/graphql';
import ArrowLink from '@/ui/links/ArrowLink';
import UnstyledLink from '@/ui/links/UnstyledLink';
import PrimaryLink from '@/ui/links/PrimaryLink';

const Post: React.FC<PostSnippetFragment> = ({ title, url, id }) => {
  const videoUrl = useMemo(() => useGetVideoId(url), [url]);
  const postURL = useMemo(() => `/p/${id}`, [id]);
  const description =
    'Ea velit anim est reprehenderit ea nostrud fugiat proident aliqua esse tempor ex quis do.';
  return (
    <li className='mt-2 flex items-center'>
      <UnstyledLink href={postURL}>
        <div className='relative grid  grid-cols-6 gap-3'>
          <div className='col-span-2'>
            {/* @todo use next image  */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`http://i.ytimg.com/vi/${videoUrl}/mqdefault.jpg`}
              alt={`Post - ${title}`}
              title={title}
            />
          </div>
          <div className='col-span-4 flex flex-col'>
            <h4 className='font-medium  text-primary-700'>{title}</h4>
            {/* @todo add description */}
            <p className='text-sm font-normal text-gray-700'>
              {description.slice(0, 48)}
              <ArrowLink
                as={PrimaryLink}
                className='inline-flex items-center font-normal'
                href={postURL}
              >
                ...Go to post
              </ArrowLink>
            </p>
            <span className='mt-2 text-sm font-light text-gray-400'>
              200k Views
            </span>
          </div>
        </div>
      </UnstyledLink>
    </li>
  );
};
export default Post;
