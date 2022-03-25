import React, { useState } from 'react';

import Button from '@/ui/buttons/Button';

import { GetPostsInput, useGetPostsQuery } from '@/generated/graphql';

interface PageProps {
  variables: GetPostsInput;
  onLoadMore: (variables: GetPostsInput) => void;
  isLastPage: boolean;
}

const Page: React.FC<PageProps> = ({
  variables: { limit, cursor },
  onLoadMore,
  isLastPage,
}) => {
  const [{ data, fetching }] = useGetPostsQuery({
    variables: {
      input: { limit, cursor },
    },
  });

  if (!fetching && !data?.getPosts?.posts?.length) {
    <div>No posts</div>;
  }
  return (
    <>
      <ul>
        {data?.getPosts?.posts?.map((p) => (
          <div key={`post-${p.id}`}>{p?.title}</div>
        ))}
      </ul>
      {(isLastPage && data?.getPosts?.hasMore) || fetching ? (
        <Button
          className='px-2 py-1 text-sm'
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
const LIMIT = 5;
const Posts = () => {
  const [variables, setVariables] = useState<GetPostsInput[]>([
    {
      limit: LIMIT,
      cursor: null,
    },
  ]);

  const onLoadMore = ({ limit, cursor }: GetPostsInput) => {
    setVariables([...variables, { cursor, limit }]);
  };

  return variables.map((variable, i) => (
    <Page
      isLastPage={variables.length - 1 === i}
      onLoadMore={onLoadMore}
      variables={variable}
      key={`page-${variable?.cursor}`}
    />
  ));
};

export default Posts;
