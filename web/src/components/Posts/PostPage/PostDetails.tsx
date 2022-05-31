import NextImage from '@/components/NextImage';
import { PostSnippetFragment } from '@/generated/graphql';
import Button from '@/ui/buttons/Button';
import { isServer } from '@/utils/isServer';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { VscCopy } from 'react-icons/vsc';
import Tooltip from '../../../ui/Tooltip';
import ShareOnButtons from './ShareOnButtons';
import { ToastContainer, toast } from 'react-toastify';

type IPostDetailsProps = PostSnippetFragment;

// post date,author name etc.
const PostDetails: React.FC<IPostDetailsProps> = ({ title, createdAt }) => {
  const notify = () => toast('Link Copied!');

  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <NextImage
          alt={`Post - ${title} card image`}
          className='mr-4'
          width={48}
          height={48}
          imgClassName='rounded-full'
          // @prod replace this with author photo
          src={'https://picsum.photos/48/48'}
        />
        <div className='flex flex-col font-medium text-gray-900'>
          Anar Rashidov
          <span className='flex items-center text-sm font-light text-gray-500'>
            {dayjs(createdAt).format('MMM D, YYYY')}
          </span>
        </div>
      </div>
      <div className='mt-4 space-x-4'>
        <ShareOnButtons />

        <CopyToClipboard
          onCopy={notify}
          text={(!isServer ? window?.location : null) as any}
        >
          <Button className='p-0 text-gray-500' variant='ghost'>
            <VscCopy size={24} />
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
export default PostDetails;
