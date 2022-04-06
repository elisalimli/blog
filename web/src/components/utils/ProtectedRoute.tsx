import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Loading from '@/ui/Loading';

import { useMeQuery } from '@/generated/graphql';

interface Props {
  children: React.ReactNode;
}
const ProtectedRoute = ({ children }: Props) => {
  const [{ fetching, data }] = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (!fetching && !data?.me) {
      if (router.pathname.includes('/team')) {
        router.replace(`/login?next=/`);
      } else router.replace(`/login?next=${router.pathname}`);
    }
  }, [data, router, fetching]);

  if (data?.me) return children;

  return <Loading />;
};

export default ProtectedRoute;
