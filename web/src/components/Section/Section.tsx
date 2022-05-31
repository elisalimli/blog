import React from 'react';

const Section: React.FC = ({ children }) => {
  return <section className='border bg-white px-4 py-4'>{children}</section>;
};

export default Section;
