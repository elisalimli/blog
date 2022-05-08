import React from 'react';
import Divider from '@/ui/Divider';

const SectionHeader: React.FC = ({ children }) => {
  return (
    <div className='mb-12 text-center'>
      <h2 className='text-4xl font-bold text-gray-800'>{children}</h2>
      <div className='my-3 flex justify-center'>
        <Divider
          className='rounded-2xl border-gray-200'
          style={{ width: 98, borderWidth: 4 }}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
