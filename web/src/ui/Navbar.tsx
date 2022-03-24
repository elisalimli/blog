import React from 'react';

import { headerNavLinks } from '@/data/headerNavLinks';

import LgLogo from '@/ui/icons/LogoIcon';
import UnstyledLink from '@/ui/links/UnstyledLink';
import Menu from '@/ui/Menu';
import { defaultMeta } from '@/ui/Seo';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-10'>
      <div>
        <UnstyledLink href='/' aria-label={defaultMeta.title}>
          <div className='flex items-center justify-between'>
            <div className='mr-3'>
              <LgLogo width={36} height={36} />
            </div>
            <div className='hidden h-6 items-center text-2xl font-semibold sm:flex sm:items-center'>
              {defaultMeta.title}
            </div>
          </div>
        </UnstyledLink>
      </div>
      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          {headerNavLinks.map((link) => (
            <UnstyledLink
              key={link.title}
              href={link.href}
              className='p-1 font-medium text-gray-900  sm:px-4'
            >
              {link.title}
            </UnstyledLink>
          ))}
        </div>
        {/* <ThemeSwitch /> */}
        {/* <MobileNav /> */}
      </div>
      <Menu />
    </header>
  );
};

export default Header;
