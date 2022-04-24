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

const Header = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
  const screen = useMediaQuery({ maxWidth: defaultTheme?.screens?.sm });

  useEffect(() => {
    // for server side rendering
    if (!isServer) setMobile(screen);
  }, [screen]);

  return (
    <header>
      <nav className='flex pt-10'>
        <div className='flex w-full items-center'>
          <NavbarBrand />
          <Formik
            initialValues={{ search: '' }}
            onSubmit={async (values, { setErrors }) => {
              router.push('/results?search_query', {
                query: { query: values.search },
              });
              // router.replace(`/s/${values.search}`);
            }}
          >
            {() => (
              <Form className=''>
                <InputField name='search' placeholder='Search' />
              </Form>
            )}
          </Formik>
        </div>
        <div className='flex items-center'>
          {mobile ? <Menu /> : <NavLinks />}
        </div>
      </nav>
      <Divider className='mt-4 pb-8' />
    </header>
  );
};

export default Header;
