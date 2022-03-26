import React from 'react';
import Header from '@/ui/Navbar';
import SectionContainer from '@/ui/SectionContainer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-50'>
      <SectionContainer>
        <div className='flex h-screen flex-col justify-between '>
          <Header />
          <main className='mb-auto pb-24'>{children}</main>
          {/* <Footer /> */}
        </div>
      </SectionContainer>
    </div>
  );
};

export default LayoutWrapper;
