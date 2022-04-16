import HamburgerMenu from '@/components/Menu/HamburgerMenu';
import { headerNavLinks } from '@/data/headerNavLinks';
import { useClickOutside } from '@/utils/hooks/useClickOutside';
import React, { useEffect, useRef, useState } from 'react';
import UnstyledLink from '../../ui/links/UnstyledLink';

import { GrClose } from 'react-icons/gr';
import { withAuthButton } from '../utils/withAuthButton';

const Menu: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <div className='relative'>
      <button onClick={handleClick}>
        <HamburgerMenu />
      </button>
      <div
        style={{ left: open ? '0%' : '100%' }}
        className={`fixed top-0 z-40 min-h-full w-full bg-white p-6 opacity-95 transition-all duration-700 `}
      >
        <div className='flex justify-between'>
          {/* <Brand /> */}
          <button onClick={handleClick}>
            <GrClose className='h-6 w-6' />
          </button>
        </div>
        <div className='mt-8 flex flex-col space-y-4'>
          {headerNavLinks.map((link) => (
            <UnstyledLink
              href={link.href}
              className='text-xl font-semibold'
              key={`nav-menu-link-${link.href}`}
            >
              <span className='animated-underline'>{link.title}</span>
            </UnstyledLink>
          ))}
          {children}
        </div>
      </div>
    </div>
  );
};

export default withAuthButton(Menu);
