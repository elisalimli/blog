import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { ImSpinner2 } from 'react-icons/im';

import SectionContainer from '@/ui/SectionContainer';
import Seo from '@/ui/Seo';

import NotFound from '@/components/404';
import IndividualPost from '@/components/Posts/IndividualPost';
import { usePostQuery } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

const Post = () => {
  const router = useRouter();
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
    return <NotFound />;
  }
  return (
    <SectionContainer>
      <Seo
        title={data?.post?.title}
        description={'data?.post?.title' as string}
      />
      <IndividualPost post={data?.post} />
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
