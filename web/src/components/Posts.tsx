import React, { useState } from 'react';
import { useGetPostsQuery } from '../generated/graphql';

const Posts = () => {
  const [variables, setVariables] = useState({
    limit: 5,
    cursor: null,
  });

  const [{ data, fetching }] = useGetPostsQuery({
    variables: {
      input: variables,
    },
  });
  if (fetching) {
    return <div>loading...</div>;
  } else if (!fetching && !data?.getPosts?.posts?.length) {
    <div>No posts</div>;
  }
  return (
    <>
      <button
        onClick={() => {
          const posts = data?.getPosts?.posts;
          setVariables({
            limit: 10,
            cursor: posts[posts?.length - 1].id,
          });
        }}
      >
        load more
      </button>
      <ul>
        {data?.getPosts?.posts?.map((p) => (
          <div key={`post-${p.id}`}>{p?.title}</div>
        ))}
      </ul>
    </>
  );
};

export default Posts;
