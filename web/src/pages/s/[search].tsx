import {
  GetPostsBySearchInput,
  usePostsBySearchQuery,
} from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import Post from '../../components/Posts/Post';

const LIMIT = 20;
const Results = () => {
  const router = useRouter();
  const [variables, setVariables] = useState<GetPostsBySearchInput>({
    limit: LIMIT,
    query: (router?.query?.search as string) || null,
    cursor: null,
  });

  const [{ data, fetching, stale }] = usePostsBySearchQuery({
    variables: {
      input: variables,
    },
  });

  const loader = useRef(null);

  const onLoadMore = () => {
    const posts = data?.postsBySearch?.posts;
    if (posts)
      setVariables({
        ...variables,
        limit: LIMIT,
        cursor: posts[posts.length - 1].createdAt,
      });
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      onLoadMore();
      console.log('fired');
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {data?.postsBySearch?.posts?.map((post, i) => (
          <Post post={post} key={`post-${post.id}`} />
        ))}
        <div ref={loader} />
      </ul>
    </div>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Results);
