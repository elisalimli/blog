import React from 'react';
import { IconType } from 'react-icons/lib';

import UnstyledLink from '@/ui/links/UnstyledLink';

interface SocialLinkProps {
  as: IconType;
  href: string;
}
const SocialLink: React.FC<SocialLinkProps> = ({ as, href }) => {
  const Icon = as;
  return (
    <li>
      <UnstyledLink href={href}>
        <Icon className='text-xl text-gray-400 hover:text-gray-700' />
      </UnstyledLink>
    </li>
  );
};
export default SocialLink;
