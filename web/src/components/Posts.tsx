import React, { useState } from 'react';

import Button from '@/ui/buttons/Button';

import {
  GetPostsInput,
  useGetPostsQuery,
  usePostsQuery,
} from '@/generated/graphql';
import Post from '@/components/Post';
import { isServer } from '../utils/isServer';

// interface PageProps {
//   variables: GetPostsInput;
//   onLoadMore: (variables: GetPostsInput) => void;
//   isLastPage: boolean;
// }

// const Page: React.FC<PageProps> = ({
//   variables: { limit, cursor },
//   onLoadMore,
//   isLastPage,
// }) => {
//   const [{ data, fetching }] = useGetPostsQuery({
//     variables: {
//       input: { limit, cursor },
//     },
//   });

//   if (fetching && !data?.getPosts?.posts?.length) {
//     <div>loading...</div>;
//   } else if (!fetching && !data?.getPosts?.posts?.length) {
//     <div>No posts</div>;
//   }
//   return (
//     <>

//       ) : null}
//     </>
//   );
// };
const LIMIT = 5;
const Posts = () => {
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
    <>
      <ul className='grid grid-cols-1 gap-4  md:grid-cols-2 xl:grid-cols-3'>
        {data?.posts?.posts?.map((post) => (
          <Post post={post} key={`post-${post.id}`} />
        ))}
      </ul>
      {data?.posts?.hasMore && (
        <div className='mt-4 flex justify-center'>
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
    </>
  );
};

export default Posts;
