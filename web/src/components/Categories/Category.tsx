import React from 'react';

import { CategorySnippetFragment } from '../../generated/graphql';
import clsxm from '../../lib/clsxm';
import { useCategoryIdStore } from '../../stores/useCategoryIdStore';
import { buttonFocusClass } from '../../ui/buttons/Button';

interface ICategoryProps {
  category?: CategorySnippetFragment;
  isCategory?: boolean;
  isDropdown?: boolean;
}

const Category: React.FC<ICategoryProps> = ({
  children,
  category,
  isCategory = true,
  isDropdown = false,
}) => {
  const { setCategoryId, categoryId } = useCategoryIdStore();
  const isActive = categoryId === category?.id;

  return (
    <div className='relative'>
      <button
        className={clsxm(
          `w-full p-2 capitalize ${
            isActive ? 'bg-gray-200' : 'hover:bg-gray-100'
          } ${isDropdown ? '' : 'border-r'}`,
          buttonFocusClass
        )}
        onClick={isCategory ? () => setCategoryId(category!.id) : undefined}
      >
        {children}
      </button>
      {isActive && !isDropdown ? (
        <div className='absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-200' />
      ) : null}
    </div>
  );
};
export default Category;
