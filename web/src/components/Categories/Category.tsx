import React from 'react';

import { CategorySnippetFragment } from '../../generated/graphql';
import clsxm from '../../lib/clsxm';
import { useCategoryIdStore } from '../../stores/useCategoryIdStore';
import { buttonFocusClass } from '../../ui/buttons/Button';

const Category: React.FC<CategorySnippetFragment> = ({ id, name }) => {
  const { setCategoryId, categoryId } = useCategoryIdStore();

  const isActive = categoryId === id;

  return (
    <div className='relative'>
      <button
        className={clsxm(
          `border-r p-2 capitalize hover:bg-gray-100 ${
            isActive ? 'bg-gray-200' : ''
          }`,
          buttonFocusClass
        )}
        onClick={() => setCategoryId(id)}
      >
        {name}
      </button>
      {isActive ? (
        <div className='absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-200' />
      ) : null}
    </div>
  );
};
export default Category;
