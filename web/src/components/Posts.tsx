import { withUrqlClient } from 'next-urql';
import React from 'react';
import { useGetPostQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Posts: React.FC = () => {
  const [{ data }] = useGetPostQuery({
    variables: { input: { postId: '58e324c5-c69e-401e-be5f-8df9dfa0ecc3' } },
  });
  return (
    <div>
      {data?.getPost ? <div>{data?.getPost?.title}</div> : <div>loading..</div>}
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(Posts);
