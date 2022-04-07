import React from 'react';

import Divider from '@/ui/Divider';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Navbar';
import SectionContainer from '@/components/SectionContainer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-100'>
      <SectionContainer>
        <div className='min-h-screen'>
          <Header />
          <main>{children}</main>
          <Divider className='my-4' />
          <Footer />
        </div>
      </SectionContainer>
    </div>
  );
};

export default LayoutWrapper;
