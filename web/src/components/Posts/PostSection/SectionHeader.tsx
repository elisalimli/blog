import React from 'react';
import Divider from '@/ui/Divider';

const SectionHeader: React.FC = ({ children }) => {
  return (
    <div className='mb-12 text-center'>
      <h2 className='text-4xl font-bold text-gray-800'>{children}</h2>
      <div className='my-3 flex justify-center'>
        <div
          className='rounded-2xl bg-gray-200'
          style={{ width: 98, height: 8 }}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
