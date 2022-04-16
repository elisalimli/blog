import React from 'react';

import Divider from '@/ui/Divider';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import SectionContainer from '@/components/SectionContainer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-100'>
      <SectionContainer>
        <Navbar />
        <div className='flex min-h-screen flex-col justify-between'>
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
