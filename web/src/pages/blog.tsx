import { withUrqlClient } from 'next-urql';
import { useState } from 'react';

import Button from '@/ui/buttons/Button';
import SectionContainer from '@/components/SectionContainer';
import Seo from '@/ui/Seo';

import Posts from '@/components/Posts/Posts';
import { GetPostsInput, PostSnippetFragment } from '@/generated/graphql';
import { usePostsQuery } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';
import Divider from '@/ui/Divider';
import debounce from 'debounce';

const LIMIT = 9;
const BlogPage = () => {
  const [variables, setVariables] = useState<GetPostsInput>({
    limit: LIMIT,
    cursor: null,
  });
  const [{ data, stale }] = usePostsQuery({
    variables: { input: variables },
  });

  const onLoadMore = ({ limit, cursor }: GetPostsInput) => {
    setVariables({ cursor, limit });
  };

  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />
      <h1 className='mb-2 text-gray-900'>All Posts</h1>
      <p className='mb-3 text-lg text-gray-500'>
        A blog created with Next.js and Tailwind.css
      </p>
      <Divider className='mt-8 mb-10' />
      <Posts posts={data?.posts?.posts as PostSnippetFragment[]} />
      {data?.posts?.hasMore && (
        <div className='mt-12 flex justify-center'>
          <Button
            className='grid px-2 py-1 text-sm'
            variant='outline'
            onClick={() => {
              const posts = data?.posts?.posts;
              if (posts?.length) {
                onLoadMore({
                  limit: LIMIT,
                  cursor: posts[posts.length - 1].createdAt,
                });
              }
            }}
            isLoading={stale}
          >
            Load more
          </Button>
        </div>
      )}
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(BlogPage);
