import NotFound from '@/components/404';
import PostPage from '@/components/Posts/PostPage';
import Sidebar from '@/components/Posts/Sidebar';
import { withLayout } from '@/components/utils/withLayout';
import { PostTagSnippetFragment, usePostQuery } from '@/generated/graphql';
import Seo from '@/ui/Seo';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import { ImSpinner2 } from 'react-icons/im';

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
        title={`${data?.post?.title} - Anka's blog`}
        description={'data?.post?.title' as string}
      />

      <div className='flex flex-col space-y-12 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0 2xl:grid-cols-7'>
        <div className='col-span-3 rounded-xl border border-gray-300 bg-white p-8 drop-shadow-md 2xl:col-span-5'>
          <PostPage post={data?.post as PostTagSnippetFragment} />
        </div>

        <div className='col-span-1 rounded-xl pb-2 2xl:col-span-2'>
          <Sidebar />
        </div>
      </div>
    </>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(
  withLayout(Post)
);
