import React from 'react';
import UnstyledLink from './links/UnstyledLink';
import { defaultMeta } from './Seo';
import Logo from '@/data/logo.svg';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-10'>
      <div>
        <UnstyledLink href='/' aria-label={defaultMeta.title}>
          <div className='flex items-center justify-between'>
            <div className='mr-3'>
              <Logo />
            </div>
            {typeof defaultMeta.title === 'string' ? (
              <div className='hidden h-6 text-2xl font-semibold sm:block'>
                {defaultMeta.title}
              </div>
            ) : (
              defaultMeta.title
            )}
          </div>
        </UnstyledLink>
      </div>
      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          {/* {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'
                >
                  {link.title}
                </Link>
              ))} */}
        </div>
        {/* <ThemeSwitch /> */}
        {/* <MobileNav /> */}
      </div>
    </header>
  );
};

export default Header;
