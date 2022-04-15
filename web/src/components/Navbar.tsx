import Menu from '@/components/Menu/Menu';
import NavbarBrand from '@/components/NavbarBrand';
import { headerNavLinks } from '@/data/headerNavLinks';
import Button from '@/ui/buttons/Button';
import Divider from '@/ui/Divider';
import LgLogo from '@/ui/icons/LogoIcon';
import UnstyledLink from '@/ui/links/UnstyledLink';
import { defaultMeta } from '@/ui/Seo';
import React, { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLogoutMutation, useMeQuery } from '@/generated/graphql';
import { isServer } from '@/utils/isServer';

const maxWidth = '480px';
const Header = () => {
  const [{ data }] = useMeQuery();
  const [_, logout] = useLogoutMutation();
  const [mobile, setMobile] = useState(false);
  const screen = useMediaQuery({ maxWidth });

  useEffect(() => {
    // for server side rendering
    if (!isServer) {
      setMobile(screen);
    }
  }, [screen]);

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
        {mobile ? (
          <Menu />
        ) : (
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
              {content}
            </div>
          </div>
        )}
      </nav>
      <Divider className='mt-4 pb-8' />
    </header>
  );
};

export default Header;
