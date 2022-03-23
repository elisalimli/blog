import React from 'react';
import Header from '@/components/Navbar';
import SectionContainer from '@/components/SectionContainer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-50'>
      <SectionContainer>
        <div className='flex h-screen flex-col justify-between'>
          <Header />
          <main className='mb-auto'>{children}</main>
          {/* <Footer /> */}
        </div>
      </SectionContainer>
    </div>
  );
};

export default LayoutWrapper;
