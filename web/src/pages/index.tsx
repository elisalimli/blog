import Posts from '@/components/Posts/Posts';
import PostsWithCategories from '@/components/Posts/PostsWithCategories';
import { PostSnippetFragment, usePostsQuery } from '@/generated/graphql';
import Divider from '@/ui/Divider';
import Seo from '@/ui/Seo';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import React, { Fragment } from 'react';
import { withLayout } from '@/components/utils/withLayout';
import Thumbnail from '../components/Posts/Post/Thumbnail';
import Image from './19693.jpg';
import NextImage from '../components/NextImage';
import Button from '../ui/buttons/Button';

const LIMIT = 8;
const HomePage = () => {
  const [{ data }] = usePostsQuery({
    variables: { input: { limit: LIMIT, cursor: null } },
  });
  console.log('here', data);

  return (
    <Fragment>
      <Seo title='Home' description='Home' />
      {/* <div
      > */}
      {/* <h1 className='text-3xl text-white'>Spider man</h1> */}
      <div
        style={{
          backgroundImage:
            'url(https://cdn.britannica.com/21/195821-050-7860049D/Baku-blend-Azerbaijan-skyscrapers-buildings.jpg)',
        }}
        className='mb-8 rounded-3xl text-white '
      >
        <div
          className='relative flex h-[300px] w-full flex-col items-center justify-center rounded-3xl'
          style={{
            backgroundImage: 'linear-gradient(180deg,rgba(51,51,51,0),#484747)',
          }}
        >
          <div className='absolute left-36'>
            <h1>Spider man</h1>
            <strong className='ml-1 text-3xl'>Land of the free</strong>
            <Button variant='primary'>Watch</Button>
          </div>
        </div>
      </div>
      {/* <NextImage
            alt='spider man'
            height='950px'
            imgClassName='rounded-3xl '
            objectFit='cover'
            src={Image}
          /> */}
      {/* <div className='absolute top-1/2  translate-x-1/2 -translate-y-1/2 text-white'>
          </div> */}
      {/* </div> */}
      <Posts posts={data?.posts?.posts as PostSnippetFragment[]} />
      <Divider className='my-8' />
      <PostsWithCategories />
    </Fragment>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(
  withLayout(HomePage)
);
