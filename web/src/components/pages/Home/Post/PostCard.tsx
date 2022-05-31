import PostInfo from '@/components/pages/Home/Post/PostInfo';
import Thumbnail from '@/components/pages/Home/Post/Thumbnail';
import { PostSnippetFragment } from '@/generated/graphql';
import UnstyledLink from '@/ui/links/UnstyledLink';
import { useGetVideoId } from '@/utils/useGetVideoId';
import React from 'react';
import { ImPlay3 } from 'react-icons/im';

interface PostProps {
  post: PostSnippetFragment;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const { id, url } = post;
  const ytId = useGetVideoId(url);
  // changin post url only when post's id has changed
  const postURL = `/p/${id}`;

  return (
    <li className='relative max-w-full rounded-2xl rounded-b-lg bg-gray-50 drop-shadow-sm transition duration-500 hover:scale-105'>
      <UnstyledLink href={postURL}>
        {/* @todo change icon if post type is image  */}
        <div className='absolute top-0 right-0 z-10'>
          <ImPlay3 className='text-3xl text-white' />
        </div>

        <div className='relative'>
          <Thumbnail ytId={ytId as string} />
        </div>
        <PostInfo post={post} postURL={postURL} />
      </UnstyledLink>
    </li>
  );
};
export default React.memo(PostCard);
