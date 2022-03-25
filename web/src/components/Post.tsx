import React from 'react';
import { PostFragmentFragment } from '../generated/graphql';

interface PostProps {
  post: PostFragmentFragment;
}

const Page: React.FC<PostProps> = () => {
  return <div>hello world</div>;
};
