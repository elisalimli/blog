import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Formik, Form } from 'formik';

import Divider from '@/ui/Divider';

import Menu from '@/components/Menu/Menu';
import NavLinks from '@/components/Navbar/NavLinks';
import { isServer } from '@/utils/isServer';

import NavbarBrand from '@/components/Navbar/NavbarBrand';
import defaultTheme from 'tailwindcss/defaultTheme';
import InputField from '../../ui/InputField';
import { useRouter } from 'next/router';
import clsxm from '../../lib/clsxm';

const Header = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
  const screen = useMediaQuery({ maxWidth: defaultTheme?.screens?.lg });

  useEffect(() => {
    // for server side rendering
    if (!isServer) setMobile(screen);
  }, [screen]);

  return (
    <header>
      <nav className='flex  pt-10'>
        <div
          className={clsxm([
            'flex items-center justify-between',
            mobile ? 'w-full' : 'min-w-[60%] max-w-[90%]',
          ])}
        >
          <NavbarBrand />
          <Formik
            initialValues={{ search: '' }}
            onSubmit={async ({ search }, { setErrors }) => {
              // router.push(`/search?query=${values.search}`);
              // router.push({
              //   pathname: '/search',
              //   query: { query: search },
              // });

              window.location.href = `/search?query=${search}`;
              // router.replace(`/s/${values.search}`);
            }}
          >
            {() => (
              <Form className='mr-4 w-[85%]'>
                <InputField name='search' placeholder='Search' />
              </Form>
            )}
          </Formik>
        </div>
        <div className='ml-auto flex items-center'>
          {mobile ? <Menu /> : <NavLinks />}
        </div>
      </nav>
      <Divider className='mt-4 pb-8' />
    </header>
  );
};

export default Header;
