import React, { useMemo } from 'react';
import NextImage from '@/components/NextImage';
import UnderlineLink from '@/ui/links/UnderlineLink';
import { useGetVideoId } from '@/utils/useGetVideoId';
import { PostSnippetFragment } from '../../../generated/graphql';

const Post: React.FC<PostSnippetFragment> = ({ title, url, id }) => {
  const videoUrl = useMemo(() => useGetVideoId(url), [url]);

  return (
    <li className='mt-2 flex items-center'>
      <NextImage
        priority
        src={`http://i.ytimg.com/vi/${videoUrl}/mqdefault.jpg`}
        width={80}
        height={45}
        alt='Icon'
      />
      <UnderlineLink
        className='ml-2 break-words uppercase  text-primary-600'
        href={`/p/${id}`}
      >
        {title.slice(0, 16)}...
      </UnderlineLink>
    </li>
  );
};
export default Post;
