import React from 'react';
import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

import LgLogo from '@/ui/icons/LogoIcon';
import UnstyledLink from '@/ui/links/UnstyledLink';
import Header from '@/components/Navbar';
import SectionContainer from '@/components/SectionContainer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-100'>
      <SectionContainer>
        <div className='min-h-screen'>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
          <hr />
          <footer className='flex w-full items-center justify-between px-12 pb-4'>
            <LgLogo width={36} height={36} />
            <ul className='flex items-center space-x-2'>
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
                <li key={`social-${i}`}>
                  <UnstyledLink href='https://www.instagram.com/anar_anka_reshidov/'>
                    <Icon />
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </SectionContainer>
    </div>
  );
};

export default LayoutWrapper;
