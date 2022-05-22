import React from 'react';

import Divider from '@/ui/Divider';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import SectionContainer from '@/components/SectionContainer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <SectionContainer>
        <Navbar />
        <div className=''>
          <main>{children}</main>
          <div>
            <Divider className='my-4' />
            <Footer />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default LayoutWrapper;
