import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import Seo from '@/ui/Seo';

import { usePostQuery } from '@/generated/graphql';

import IndividalPost from '../../components/IndividalPost';
import SectionContainer from '../../ui/SectionContainer';
import { createUrqlClient } from '../../utils/createUrqlClient';

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  const [{ data, stale }] = usePostQuery({
    variables: { input: { postId: router.query.postId as string } },
  });

  console.log('data', data);
  if (!data?.post) {
    return <div>no post </div>;
  }

  console.log('is f : ', stale);
  return (
    <SectionContainer>
      <Seo
        title={data?.post?.title || "Couldn't find the post"}
        description={data?.post?.title || "Couldn't find the post"}
      />
      <IndividalPost post={data?.post} />
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
