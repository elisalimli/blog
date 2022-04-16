import React from 'react';
import { useTagsQuery } from '../../generated/graphql';

const Tags: React.FC = () => {
  const [{ data }] = useTagsQuery();
  return (
    <div className='flex'>
      {data?.tags.map(({ id, name }) => (
        <div key={`tag-${id}`} className=''>
          {name}
        </div>
      ))}
    </div>
  );
};
export default Tags;
