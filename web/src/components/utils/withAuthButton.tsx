import React from 'react';

import Button from '@/ui/buttons/Button';
import UnstyledLink from '@/ui/links/UnstyledLink';

import { useLogoutMutation, useMeQuery } from '@/generated/graphql';

export const withAuthButton = (WrappedComponent: React.FC) => {
  const HOC = React.memo(() => {
    const [_, logout] = useLogoutMutation();
    const [{ data }] = useMeQuery();
    let content = (
      <UnstyledLink href='/login'>
        <Button className='w-full sm:w-fit' variant='light'>
          Sign in
        </Button>
      </UnstyledLink>
    );

    if (data?.me) {
      content = (
        <Button
          className='w-full sm:w-fit'
          variant='primary'
          onClick={() => logout()}
        >
          Logout
        </Button>
      );
    }
    return <WrappedComponent>{content}</WrappedComponent>;
  });
  return HOC;
};
