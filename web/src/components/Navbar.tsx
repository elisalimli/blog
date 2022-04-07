import React from 'react';

import { headerNavLinks } from '@/data/headerNavLinks';

import LgLogo from '@/ui/icons/LogoIcon';
import UnstyledLink from '@/ui/links/UnstyledLink';
import Menu from '@/components/Menu';
import NavbarBrand from '@/components/NavbarBrand';
import { defaultMeta } from '@/ui/Seo';
import Divider from '@/ui/Divider';

const Header = () => {
  return (
    <header>
      <nav className='flex items-center justify-between pt-10'>
        <div>
          <UnstyledLink href='/' aria-label={defaultMeta.title}>
            <div className='flex items-center justify-between'>
              <div className='mr-3'>
                <LgLogo width={36} height={36} />
              </div>
              <NavbarBrand />
            </div>
          </UnstyledLink>
        </div>
        <div className='flex items-center text-base leading-5'>
          <div className='hidden sm:block'>
            {headerNavLinks.map((link) => (
              <UnstyledLink
                key={link.title}
                href={link.href}
                className='p-1 font-medium uppercase text-gray-900  sm:px-4'
              >
                {link.title}
              </UnstyledLink>
            ))}
          </div>
          {/* <ThemeSwitch /> */}
          {/* <MobileNav /> */}
        </div>
        <Menu />
      </nav>
      <Divider className='mt-4 pb-8' />
    </header>
  );
};

export default Header;
