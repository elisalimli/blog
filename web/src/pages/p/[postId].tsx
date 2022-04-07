import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { ImSpinner2 } from 'react-icons/im';

import Seo from '@/ui/Seo';

import NotFound from '@/components/404';
import IndividualPost from '@/components/Posts/IndividualPost';
import PostSidebar from '@/components/Posts/PostSidebar';
import { usePostQuery } from '@/generated/graphql';
import { PostSnippetFragment } from '@/generated/graphql';
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
    <>
      <Seo
        title={data?.post?.title}
        description={'data?.post?.title' as string}
      />
      <div className='flex flex-col space-y-12 md:grid md:grid-cols-4 md:gap-8'>
        <div className='col-span-3 rounded-xl bg-white py-4 px-2 shadow-inner'>
          <IndividualPost post={data?.post as PostSnippetFragment} />
        </div>
        <PostSidebar />
      </div>
    </>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
