import React from 'react';
import { IconType } from 'react-icons/lib';

import UnstyledLink from '@/ui/links/UnstyledLink';

interface SocialLinkProps {
  Icon: IconType;
}
const SocialLink: React.FC<SocialLinkProps> = ({ Icon }) => {
  return (
    <li>
      <UnstyledLink href='https://www.instagram.com/anar_anka_reshidov/'>
        <Icon className='text-xl' />
      </UnstyledLink>
    </li>
  );
};
export default SocialLink;
