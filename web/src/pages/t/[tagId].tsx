import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { useEffect } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import SectionContainer from '@/components/SectionContainer';

import Post from '@/components/Posts/Post';
import { usePostsByTagQuery } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

const PostPyTag = () => {
  const router = useRouter();
  const [{ data, fetching }] = usePostsByTagQuery({
    variables: { input: { tagId: router?.query?.tagId as string } },
  });
  useEffect(() => {
    if (!data?.postsByTag?.length && !fetching) {
      router.replace('/404');
    }
  }, [router, fetching, data?.postsByTag]);

  if (fetching) {
    return (
      <div className='flex items-center justify-center py-8'>
        <ImSpinner2 className='animate-spin text-6xl' />
      </div>
    );
  }
  return (
    <SectionContainer>
      {/* @todo fix this  */}
      {/* <Seo
        title={data?.postsByTag[0]?.tags?.filter(())}
        description={data?.postsByTag[0]?.tags[0].name}
        // description={data?.post?.title}
      /> */}
      {/* <IndividalPost post={data?.post} /> */}
      <ul className='grid grid-cols-1 gap-4  md:grid-cols-2 xl:grid-cols-3'>
        {data?.postsByTag?.map((post) => (
          <Post post={post} key={`post-${post.id}`} />
        ))}
      </ul>
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(PostPyTag);
