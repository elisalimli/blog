import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { useEffect } from 'react';

import Seo from '@/ui/Seo';

import { usePostQuery } from '@/generated/graphql';

import IndividualPost from '@/components/IndividualPost';
import SectionContainer from '@/ui/SectionContainer';
import { createUrqlClient } from '@/utils/createUrqlClient';
import NotFound from '@/components/404';
import { ImSpinner2 } from 'react-icons/im';

const Post = () => {
  const router = useRouter();
  const [{ data, fetching, stale }] = usePostQuery({
    variables: { input: { postId: router.query.postId as string } },
  });

  if (fetching) {
    return (
      <div className='flex items-center justify-center py-8'>
        <ImSpinner2 className='animate-spin text-6xl' />
      </div>
    );
  } else if (!data?.post && !fetching) {
    return <NotFound />;
  }
  return (
    <SectionContainer>
      <Seo
        title={'data?.post?.title'}
        description={'data?.post?.title' as string}
      />
      <IndividualPost post={data?.post} />
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
