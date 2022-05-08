import SocialLinks from '@/components/Footer/SocialLinks';
import Divider from '@/ui/Divider';
import LgLogo from '@/ui/icons/LogoIcon';
import React from 'react';
import UnderlineLink from '@/ui/links/UnderlineLink';

const Footer: React.FC = () => {
  return (
    <footer className='flex w-full flex-col items-center pb-4 '>
      {/* <LgLogo width={36} height={36} /> */}
      <h4 className='mb-3 mt-12 text-gray-800 '>Anar&apos;s blog</h4>
      <SocialLinks />
      <Divider className='my-4 w-full' />
      <LgLogo className='my-4' width={24} height={24} />
      <p className='mb-12 text-sm text-gray-400'>
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
      <p className='mb-12 text-sm text-gray-400'>
        Developed by{' '}
        <UnderlineLink href='https://github.com/alisalim17/'>
          Ali Salimli
        </UnderlineLink>
      </p>
    </footer>
  );
};
export default Footer;
