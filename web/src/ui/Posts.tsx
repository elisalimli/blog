import { withUrqlClient } from 'next-urql';
import React from 'react';
import { useGetPostQuery, useGetPostsQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Posts: React.FC = () => {
  const [{ data }] = useGetPostsQuery({
    variables: {
      input: {
        limit: 5,
      },
    },
  });
  console.log(data);

  return <div>salam </div>;
};

export default Posts;
