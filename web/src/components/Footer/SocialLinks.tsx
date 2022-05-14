import React from 'react';
import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import uuid from 'react-uuid';
import SocialLink from '@/components/Footer/SocialLink';

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
          href: 'https://www.youtube.com/channel/UC5Pq3-GcY8ButVAbylT9kew',
        },
      ].map(({ Icon, href }) => (
        <SocialLink href={href} as={Icon} key={`social-${uuid()}`} />
      ))}
    </ul>
  );
};
export default SocialLinks;
