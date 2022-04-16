import React from 'react';
import { useMediaQuery } from 'react-responsive';
import defaultTheme from 'tailwindcss/defaultTheme';

import Dropdown from '@/ui/Dropdown/Dropdown';
import { MdArrowDropDown } from 'react-icons/md';
import CenteredLoading from '@/components/CenteredLoading';
import { useCategoriesQuery } from '@/generated/graphql';

import Category from './Category';

const DropdownButton = () => (
  <Category isDropdown isCategory={false}>
    <div className='flex items-center'>
      Others
      <MdArrowDropDown className='h-6 w-6' />
    </div>
  </Category>
);

const Categories: React.FC = () => {
  //@todo make this hook
  const isMobile = useMediaQuery({ maxWidth: defaultTheme?.screens?.md });
  const [{ data, fetching }] = useCategoriesQuery();
  if (fetching) {
    return <CenteredLoading />;
  }
  return (
    <div className='mb-2 flex justify-between border'>
      <div className='flex'>
        {[
          { name: 'All', id: '' },
          ...((isMobile ? data!.categories!.slice(0, 1) : data!.categories) ||
            []),
        ].map((c) => (
          <Category key={`category-${c.id}`} category={c}>
            {c.name}
          </Category>
        ))}
      </div>
      <div>
        {isMobile && (
          <Dropdown
            className='ml-auto border-l'
            button={DropdownButton}
            onHover
            fixed={false}
          >
            {data!.categories!.slice(2, data?.categories?.length).map((c) => (
              <Category isDropdown key={`category-${c.id}`} category={c}>
                {c.name}
              </Category>
            ))}
          </Dropdown>
        )}
      </div>
      {/* {[{ name: 'All', id: '' }, ...(data?.categories || [])].map((c) => (
        <Category key={`category-${c.id}`} {...c} />
      ))} */}
    </div>
  );
};
export default Categories;
