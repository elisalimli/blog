import React, { Fragment } from 'react';
import Button from '@/ui/buttons/Button';

const Footer: React.FC = ({ children }) => (
  <div className='my-4 flex justify-end'>
    <Button variant='light'>Close</Button>
    {children}
  </div>
);
export default Footer;
