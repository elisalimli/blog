import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import Seo from '@/ui/Seo';

import { usePostQuery } from '@/generated/graphql';

import IndividalPost from '@/components/IndividualPost';
import SectionContainer from '@/ui/SectionContainer';
import { createUrqlClient } from '@/utils/createUrqlClient';
import NotFound from '@/components/404';
import { ImSpinner2 } from 'react-icons/im';

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  const [{ data, fetching }] = usePostQuery({
    variables: { input: { postId: router.query.postId as string } },
  });

  if (fetching) {
    return (
      <div className='flex items-center justify-center py-8'>
        <ImSpinner2 className='animate-spin text-6xl' />
      </div>
    );
  } else if (!data?.post && !fetching) {
    return (
      <div>
        <Seo description='Not found post' templateTitle='Not Found post' />
        <NotFound />
      </div>
    );
  }

  return (
    <SectionContainer>
      <Seo
        title={data?.post?.title}
        description={data?.post?.title as string}
      />
      <IndividalPost post={data?.post} />
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
