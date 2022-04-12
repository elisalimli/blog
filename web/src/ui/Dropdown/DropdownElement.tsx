import React from 'react';

interface DropdownElementProps {
  Tag?: string;
}

const DropdownElement: React.FC<DropdownElementProps> = ({
  Tag,
  children,
  ...props
}) => {
  return (
    <span
      {...props}
      className='flex min-w-full cursor-pointer px-4 py-2 font-semibold opacity-70 transition-colors duration-200 hover:bg-gray-300'
    >
      {children}
    </span>
  );
};

export default DropdownElement;
