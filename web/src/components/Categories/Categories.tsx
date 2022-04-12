import React from 'react';

import Category from './Category';
import { useCategoriesQuery } from '../../generated/graphql';
import Loading from '../../ui/Loading';

const Categories: React.FC = () => {
  const [{ data, fetching }] = useCategoriesQuery();
  if (fetching) {
    return <Loading />;
  }

  return (
    <div className='mb-2 flex border'>
      {[{ name: 'All', id: '' }, ...data!.categories!].map((c) => (
        <Category key={`category-${c.id}`} {...c} />
      ))}
    </div>
  );
};
export default Categories;
