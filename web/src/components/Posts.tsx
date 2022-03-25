import React, { useState } from 'react';

import Button from '@/ui/buttons/Button';

import { GetPostsInput, useGetPostsQuery } from '@/generated/graphql';
import Post from '@/components/Post';

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
  const [{ data, fetching }] = useGetPostsQuery({
    variables: { input: variables },
  });

  const onLoadMore = ({ limit, cursor }: GetPostsInput) => {
    setVariables({ cursor, limit });
  };
  console.log(data);

  return (
    <>
      <ul className='grid grid-cols-1 gap-4  md:grid-cols-2 xl:grid-cols-3'>
        {data?.getPosts?.posts?.map((post) => (
          <Post post={post} key={`post-${post.id}`} />
        ))}
      </ul>

      {data?.getPosts?.hasMore || fetching ? (
        <Button
          className='grid px-2 py-1 text-sm'
          onClick={() => {
            const posts = data?.getPosts?.posts;
            if (posts?.length) {
              onLoadMore({
                limit: LIMIT,
                cursor: posts[posts.length - 1].id,
              });
            }
          }}
          isLoading={fetching}
        >
          Load more
        </Button>
      ) : null}
    </>
  );
};

export default Posts;
