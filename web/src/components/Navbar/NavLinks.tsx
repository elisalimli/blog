import React from 'react';
import { headerNavLinks } from '../../data/headerNavLinks';
import UnstyledLink from '../../ui/links/UnstyledLink';
import { higherOrderComponent } from '../utils/withAuthButton';

const NavLinks: React.FC = ({ children }) => {
  return (
    <div className='flex items-center text-base leading-5'>
      <div>
        {headerNavLinks.map((link) => (
          <UnstyledLink
            key={link.title}
            href={link.href}
            className='py-1 px-4 font-medium uppercase text-gray-900'
          >
            {link.title}
          </UnstyledLink>
        ))}
        {children}
      </div>
    </div>
  );
};
export default higherOrderComponent(NavLinks);
