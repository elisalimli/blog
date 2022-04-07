import React from 'react';
import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

import SocialLink from './SocialLink';

const SocialLinks: React.FC = () => {
  return (
    <ul className='flex space-x-3'>
      {[
        {
          Icon: FiInstagram,
          href: 'https://www.instagram.com/anar_anka_reshidov/',
        },
        {
          Icon: FiTwitter,
          href: 'https://www.instagram.com/anar_anka_reshidov/',
        },
        {
          Icon: FiYoutube,
          href: 'https://www.instagram.com/anar_anka_reshidov/',
        },
      ].map(({ Icon }, i) => (
        <SocialLink Icon={Icon} key={`social-${i}`} />
      ))}
    </ul>
  );
};
export default SocialLinks;
