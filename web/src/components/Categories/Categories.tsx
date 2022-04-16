import React from 'react';
import { useCategoriesQuery } from '@/generated/graphql';
import CenteredLoading from '@/components/CenteredLoading';
import Category from './Category';
import { useMediaQuery } from 'react-responsive';
import DropdownElement from '@/ui/Dropdown/DropdownElement';
import Dropdown from '@/ui/Dropdown/Dropdown';
import defaultTheme from 'tailwindcss/defaultTheme';

const DropdownButton = () => <Category isCategory={false}>Others</Category>;

const Categories: React.FC = () => {
  //@todo make this hook
  const isMobile = useMediaQuery({ maxWidth: defaultTheme?.screens?.md });
  const [{ data, fetching }] = useCategoriesQuery();
  if (fetching) {
    return <CenteredLoading />;
  }
  return (
    <div className='mb-2 flex border'>
      {[
        { name: 'All', id: '' },
        ...((isMobile ? data!.categories!.slice(0, 1) : data!.categories) ||
          []),
      ].map((c) => (
        <Category key={`category-${c.id}`} category={c}>
          {c.name}
        </Category>
      ))}

      {isMobile && (
        <Dropdown button={DropdownButton} onHover={true} fixed={false}>
          {data!.categories!.slice(2, data?.categories?.length).map((c) => (
            <Category key={`category-${c.id}`} category={c}>
              {c.name}
            </Category>
          ))}
        </Dropdown>
      )}
      {/* {[{ name: 'All', id: '' }, ...(data?.categories || [])].map((c) => (
        <Category key={`category-${c.id}`} {...c} />
      ))} */}
    </div>
  );
};
export default Categories;
