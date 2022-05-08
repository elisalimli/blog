import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';

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
