import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import defaultTheme from 'tailwindcss/defaultTheme';

import clsxm from '@/lib/clsxm';

import Divider from '@/ui/Divider';

import Menu from '@/components/Menu/Menu';
import NavbarBrand from '@/components/Navbar/NavbarBrand';
import NavLinks from '@/components/Navbar/NavLinks';
import SearchBar from '@/components/Navbar/SearchBar';
import { isServer } from '@/utils/isServer';

const Header = () => {
  const [mobile, setMobile] = useState(false);

  //@todo fix this!!!
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const screen = useMediaQuery({ maxWidth: defaultTheme?.screens?.lg });

  useEffect(() => {
    // for server side rendering
    if (!isServer) setMobile(screen);
  }, [screen]);

  return (
    <header>
      <nav className='flex  pt-10'>
        <div
          className={clsxm([
            'flex items-center justify-between',
            mobile ? 'w-full' : 'min-w-[60%] max-w-[90%]',
          ])}
        >
          <NavbarBrand />
          <SearchBar />
        </div>
        <div className='ml-auto flex items-center'>
          {mobile ? <Menu /> : <NavLinks />}
        </div>
      </nav>
      <Divider className='mt-4 pb-8' />
    </header>
  );
};

export default Header;
