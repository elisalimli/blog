import React from 'react';
import Header from '@/ui/Navbar';
import SectionContainer from '@/ui/SectionContainer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-50'>
      <SectionContainer>
        <div className='min-h-screen'>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </SectionContainer>
    </div>
  );
};

export default LayoutWrapper;
