import React from 'react';
import { useMeQuery } from '../generated/graphql';

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
  const {} = useMeQuery;
  return <div></div>;
};
export default Admin;
