import React, { useState } from 'react';
import Button from '../Button';
import { headerNavLinks } from '../data/headerNavLinks';

const Menu = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className='relative sm:hidden'>
      {/* <MyIcon onClick={handleClick} borderRadius='full' className='home-icon'>
        <MenuIcon />
      </MyIcon> */}
      <button onClick={handleClick}>open</button>
      <div
        style={{ left: open ? '50%' : '100%' }}
        className='fixed top-0 z-40 min-h-full w-full bg-white p-6 opacity-95  transition-all duration-700'
      >
        <div className='flex justify-between'>
          {/* <Brand /> */}
          <button onClick={handleClick}>close</button>
          {/* 
          <MyIcon
            onClick={handleClick}
            borderRadius='full'
            className='home-icon'
          >
            <CloseIcon />
          </MyIcon> */}
        </div>
        <div className='mt-8 flex flex-col space-y-4'>
          {headerNavLinks.map((link) => (
            <button
              key={`nav-menu-link-${link.href}`}
              type='button'
              className='flex justify-start'
              onClick={handleClick}
            >
              {/* <MyLink href={link.to} scroll> */}
              <span className='rounded-sm border-b-2 border-gray-700 text-lg font-semibold hover:border-primary-100'>
                {link.title}
              </span>
              {/* </MyLink> */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
