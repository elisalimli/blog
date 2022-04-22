import Posts from '@/components/Posts/Posts';
import {
  PostSnippetFragment,
  usePostsBySearchQuery,
  usePostsQuery,
} from '@/generated/graphql';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';

const LIMIT = 5;
const Results = () => {
  const router = useRouter();
  const [{ data }] = usePostsBySearchQuery({
    variables: {
      input: {
        limit: LIMIT,
        query: (router?.query?.search as string) || null,
        cursor: null,
      },
    },
  });

  console.log('search', data);
  return (
    <div>
      {/* {data?.posts?.posts.map(({ title }) => (
        <div>salam</div>
      ))} */}
      <Posts posts={data?.postsBySearch?.posts as PostSnippetFragment[]} />
    </div>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Results);
