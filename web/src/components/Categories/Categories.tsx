import React from 'react';
import { useCategoriesQuery } from '../../generated/graphql';
import Category from './Category';

const Categories: React.FC = () => {
  const [{ data }] = useCategoriesQuery();

  return (
    <div className='mb-2 flex border'>
      {[{ name: 'All', id: '' }, ...data!.categories!].map((c) => (
        <Category key={`category-${c.id}`} {...c} />
      ))}
    </div>
  );
};
export default Categories;
