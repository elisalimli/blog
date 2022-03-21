import React from 'react';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SectionContainer>
      <div className='flex h-screen flex-col justify-between'>
        <Header />
        <main className='mb-auto'>{children}</main>
        {/* <Footer /> */}
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
