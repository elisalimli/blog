import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import Seo from '@/ui/Seo';

import { usePostQuery, usePostsByTagQuery } from '@/generated/graphql';

import IndividalPost from '../../components/IndividualPost';
import SectionContainer from '../../ui/SectionContainer';
import { createUrqlClient } from '../../utils/createUrqlClient';
import Post from '../../components/Post';

const PostPyTag = () => {
  const router = useRouter();
  const [{ data, stale }] = usePostsByTagQuery({
    variables: { input: { tagId: router?.query?.tagId as string } },
  });

  console.log(data, stale);
  if (!data?.postsByTag?.length && !stale) {
    router.replace('/404');
  }

  return (
    <SectionContainer>
      {/* <Seo
        title={data?.postsByTag?.title || "Couldn't find the post"}
        description={data?.post?.title || "Couldn't find the post"}
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
