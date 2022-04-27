import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import InputField from '../../ui/InputField';

const SearchBar: React.FC = () => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ search: router?.query?.query || '' }}
      onSubmit={async ({ search }) => {
        router.push({
          pathname: '/search',
          query: { query: search },
        });
      }}
    >
      {() => (
        <Form className='mr-4 w-[85%]'>
          <InputField name='search' placeholder='Search' />
        </Form>
      )}
    </Formik>
  );
};
export default SearchBar;
