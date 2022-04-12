import React from 'react';

const SectionHeader: React.FC = ({ children }) => {
  return <h1 className='text-3xl font-semibold text-gray-800'>{children}</h1>;
};

export default SectionHeader;
