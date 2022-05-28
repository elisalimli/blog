import NextImage from '@/components/NextImage';
import { withSidebar } from '@/components/utils/withSidebar';
import {
  useAdminLatestPostsQuery,
  useLatestPostsQuery,
} from '@/generated/graphql';
import Divider from '@/ui/Divider';
import UnstyledLink from '@/ui/links/UnstyledLink';
import { useGetVideoId } from '@/utils/useGetVideoId';
import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import CreatePostModal from '@/components/Modals/Post/CreatePostModal';

const Admin: React.FC = () => {
  const [{ data }] = useAdminLatestPostsQuery({
    variables: { input: { limit: null } },
  });
  return (
    <div className='py-12'>
      <header>
        <h1 className='text-5xl text-gray-800'>Posts</h1>
      </header>
      <Divider className='my-4' />

      <div className='space-y-8'>
        <CreatePostModal />
        {data?.latestPosts?.map(({ url, title, id }) => {
          const ytId = useGetVideoId(url);

          return (
            <div
              className='flex items-center justify-between'
              key={`admin-post-${id}`}
            >
              <div className='flex items-center'>
                <NextImage
                  useSkeleton
                  src={`http://i.ytimg.com/vi/${ytId}/mqdefault.jpg`}
                  width={220}
                  height={80}
                  objectFit='cover' // change to suit your needs
                  alt='Icon'
                />
                <UnstyledLink
                  className='ml-2 text-2xl font-semibold'
                  href={`/p/${id}`}
                >
                  {title}
                </UnstyledLink>
              </div>
              <div className='flex space-x-4'>
                <AiOutlineEdit size={28} />
                <AiOutlineDelete className='text-red-500' size={28} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default withSidebar(Admin);
