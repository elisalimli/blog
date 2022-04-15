import React, { useState } from 'react';

import { headerNavLinks } from '@/data/headerNavLinks';

import HamburgerMenu from '@/components/Menu/HamburgerMenu';
import UnderlineLink from '@/ui/links/UnderlineLink';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className='relative'>
      {/* <MyIcon onClick={handleClick} borderRadius='full' className='home-icon'>
        <MenuIcon />
      </MyIcon> */}
      <button onClick={handleClick}>
        <HamburgerMenu />
      </button>
      <div
        style={{ left: open ? '50%' : '-100%' }}
        className={`fixed top-0 z-40 min-h-full w-full bg-red-400 p-6 opacity-95 transition-all duration-500 `}
      >
        <div className='flex justify-between'>
          {/* <Brand /> */}
          <button onClick={handleClick}>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='mt-8 flex flex-col space-y-4'>
          {headerNavLinks.map((link) => (
            <UnderlineLink
              href={link.href}
              key={`nav-menu-link-${link.href}`}
              className='flex justify-start'
            >
              {/* <MyLink href={link.to} scroll> */}
              <span className='rounded-sm text-lg font-semibold'>
                {link.title}
              </span>
              {/* </MyLink> */}
            </UnderlineLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
