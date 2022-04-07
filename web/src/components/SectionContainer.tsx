import React from 'react';

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='mx-auto max-w-7xl px-2 sm:px-6'>{children}</div>;
};

export default SectionContainer;
