import React from 'react';

import Button from '@/ui/buttons/Button';
import UnstyledLink from '@/ui/links/UnstyledLink';

import { useLogoutMutation, useMeQuery } from '@/generated/graphql';
import LayoutWrapper from '../LayoutWrapper';

export const withLayout = (WrappedComponent: React.FC) => {
  const HOC = React.memo(() => {
    return (
      <LayoutWrapper>
        <WrappedComponent />
      </LayoutWrapper>
    );
  });
  return HOC;
};
