import Posts from '@/components/Posts/Posts';
import { withLayout } from '@/components/utils/withLayout';
import {
  GetPostsInput,
  PostSnippetFragment,
  useCategoriesQuery,
  usePostsQuery,
} from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import React, { Fragment, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from '../ui/buttons/Button';
import Divider from '../ui/Divider';
import Dropdown from '../ui/Dropdown/Dropdown';
import DropdownElement from '../ui/Dropdown/DropdownElement';
import UnstyledLink from '../ui/links/UnstyledLink';
import Seo from '../ui/Seo';

const LIMIT = 16;

const dropdownButton = () => (
  <Button variant='ghost'>
    All Categories <FiChevronDown />
  </Button>
);

const BlogPage = () => {
  const [variables, setVariables] = useState<GetPostsInput>({
    limit: LIMIT,

    cursor: null,
  });
  const [{ data: categoriesData }] = useCategoriesQuery();
  const [{ data, stale }] = usePostsQuery({
    variables: { input: variables },
  });

  const onLoadMore = () => {
    const posts = data?.posts?.posts;
    if (posts)
      setVariables({
        ...variables,
        cursor: posts[posts.length - 1]?.createdAt,
      });
  };

  return (
    <Fragment>
      <Seo title='Home' description='Home' />
      <section className='flex items-center justify-between '>
        <h1 className='mb-2 font-medium text-gray-900'>Blog</h1>
        <Dropdown onHover fixed={false} button={dropdownButton}>
          {categoriesData?.categories?.map(({ name, id }) => (
            <UnstyledLink
              key={`dropdown-category-${id}`}
              href={`/search?query=${name}`}
              className='capitalize'
            >
              <DropdownElement>{name}</DropdownElement>
            </UnstyledLink>
          ))}
        </Dropdown>
      </section>
      <Divider className='mt-8 mb-10' />
      <InfiniteScroll
        loader={undefined}
        dataLength={data?.posts?.posts?.length || 0}
        next={onLoadMore}
        hasMore={data?.posts?.hasMore || false}
        style={{ overflowY: 'hidden' }}
      >
        <Posts
          loading={stale}
          posts={data?.posts?.posts as PostSnippetFragment[]}
        />
      </InfiniteScroll>
    </Fragment>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(
  withLayout(BlogPage)
);
