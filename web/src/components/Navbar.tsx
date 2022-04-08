import Menu from '@/components/Menu/Menu';
import NavbarBrand from '@/components/NavbarBrand';
import { headerNavLinks } from '@/data/headerNavLinks';
import Button from '@/ui/buttons/Button';
import Divider from '@/ui/Divider';
import LgLogo from '@/ui/icons/LogoIcon';
import UnstyledLink from '@/ui/links/UnstyledLink';
import { defaultMeta } from '@/ui/Seo';
import React from 'react';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';

const Header = () => {
  const [{ data }] = useMeQuery();
  const [_, logout] = useLogoutMutation();
  let content = (
    <UnstyledLink href='/login'>
      <Button variant='light'>Sign in</Button>
    </UnstyledLink>
  );
  if (data?.me) {
    content = <Button onClick={() => logout()}>Logout</Button>;
  }
  return (
    <header>
      <nav className='flex items-center justify-between pt-10'>
        <div>
          <UnstyledLink href='/' aria-label={defaultMeta.title}>
            <div className='flex items-center justify-between'>
              <div className='mr-3'>
                <LgLogo width={36} height={36} />
              </div>
              <NavbarBrand />
            </div>
          </UnstyledLink>
        </div>
        <div className='flex items-center text-base leading-5'>
          <div className='hidden sm:block'>
            {headerNavLinks.map((link) => (
              <UnstyledLink
                key={link.title}
                href={link.href}
                className='p-1 font-medium uppercase text-gray-900  sm:px-4'
              >
                {link.title}
              </UnstyledLink>
            ))}
            {content}{' '}
          </div>
          {/* <ThemeSwitch /> */}
          {/* <MobileNav /> */}
        </div>
        <Menu />
      </nav>
      <Divider className='mt-4 pb-8' />
    </header>
  );
};

export default Header;
