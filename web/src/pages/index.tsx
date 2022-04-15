import { withUrqlClient } from 'next-urql';
import * as React from 'react';

import SectionContainer from '@/components/SectionContainer';
import Seo from '@/ui/Seo';

import Posts from '@/components/Posts/Posts';
import { PostSnippetFragment } from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';

import { usePostsQuery } from '../generated/graphql';
import Divider from '@/ui/Divider';
import PostsWithCategories from '../components/Posts/PostsWithCategories';
import Dropdown, { DropdownProps } from '../ui/Dropdown/Dropdown';
import DropdownElement from '../ui/Dropdown/DropdownElement';

const dropdownElements = Array.from({ length: 5 }).map((_, i) => (
  <DropdownElement key={`dropdown-element-${i}`}>Profile</DropdownElement>
));

const dropdownButton = <div>hello</div>;
const LIMIT = 8;
const HomePage = () => {
  const [{ data }] = usePostsQuery({
    variables: { input: { limit: LIMIT } },
  });
  return (
    <SectionContainer>
      <Seo title='Home' description='Home' />
      {/* <Dropdown
        fixed={false}
        button={dropdownButton}
        elements={dropdownElements}
      />
      <Posts posts={data?.posts?.posts as PostSnippetFragment[]} />
      <Divider className='my-8' />
      <PostsWithCategories /> */}
    </SectionContainer>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(HomePage);
