import { useAdminQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';
import React from 'react';

const Admin: React.FC = () => {
  const [{ data, fetching }] = useAdminQuery();
  const router = useRouter();

  if (fetching) {
    return <div>loading...</div>;
  } else if (!data?.me) {
    router.replace('/');
  }
  return <div>{data?.me?.role}</div>;
};
export default Admin;
