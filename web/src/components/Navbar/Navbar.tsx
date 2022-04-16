import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Divider from '@/ui/Divider';

import Menu from '@/components/Menu/Menu';
import NavLinks from '@/components/Navbar/NavLinks';
import { isServer } from '@/utils/isServer';

import NavbarBrand from '@/components/Navbar/NavbarBrand';
import defaultTheme from 'tailwindcss/defaultTheme';

const Header = () => {
  console.log(defaultTheme.screens);

  const [mobile, setMobile] = useState(false);
  const screen = useMediaQuery({ maxWidth: defaultTheme?.screens?.sm });

  useEffect(() => {
    // for server side rendering
    if (!isServer) {
      setMobile(screen);
    }
  }, [screen]);

  return (
    <header>
      <nav className='flex items-center justify-between pt-10'>
        <NavbarBrand />
        {mobile ? <Menu /> : <NavLinks />}
      </nav>
      <Divider className='mt-4 pb-8' />
    </header>
  );
};

export default Header;
