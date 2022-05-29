import React from 'react';
import { PostSnippetFragment } from '@/generated/graphql';
import dayjs from 'dayjs';
import { FiTwitter } from 'react-icons/fi';
import {
  BsTelegram,
  BsFacebook,
  BsWhatsapp,
  BsWindowSidebar,
} from 'react-icons/bs';
import { VscCopy } from 'react-icons/vsc';
import NextImage from '@/components/NextImage';
import UnstyledLink from '@/ui/links/UnstyledLink';
import Button from '@/ui/buttons/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRouter } from 'next/router';
import { isServer } from '@/utils/isServer';
import ReactTooltip from 'react-tooltip';

type IPostDetailsProps = PostSnippetFragment;

// post date,author name etc.
const PostDetails: React.FC<IPostDetailsProps> = ({
  title,
  createdAt,
  url,
}) => {
  const router = useRouter();
  console.log('router', router);
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
        <UnstyledLink
          target='_blank'
          href={`https://twitter.com/intent/tweet?text=${title} by Anar Reshidov ${
            !isServer ? window?.location : null
          }`}
        >
          <Button className='p-0' variant='ghost'>
            <FiTwitter size={24} />
          </Button>
        </UnstyledLink>
        <UnstyledLink
          target='_blank'
          href={`https://twitter.com/intent/tweet?text=${title} by Anar Reshidov ${
            !isServer ? window?.location : null
          }`}
        >
          <Button className='p-0' variant='ghost'>
            <BsTelegram size={24} />
          </Button>
        </UnstyledLink>
        <p data-tip='hello world'>Tooltip</p>

        <UnstyledLink
          target='_blank'
          href={`https://twitter.com/intent/tweet?text=${title} by Anar Reshidov ${
            !isServer ? window?.location : null
          }`}
        >
          <Button className='p-0' variant='ghost'>
            <BsFacebook size={24} />
          </Button>
        </UnstyledLink>

        <UnstyledLink
          target='_blank'
          href={`https://twitter.com/intent/tweet?text=${title} by Anar Reshidov ${
            !isServer ? window?.location : null
          }`}
        >
          <Button className='p-0' variant='ghost'>
            <BsWhatsapp size={24} />
          </Button>
        </UnstyledLink>
        <CopyToClipboard text={(!isServer ? window?.location : null) as any}>
          <Button className='p-0 text-gray-500' variant='ghost'>
            <VscCopy size={24} />
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
export default PostDetails;
