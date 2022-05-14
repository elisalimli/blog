import React from 'react';
import clsxm from '@/lib/clsxm';

type DropdownElementProps = React.ComponentPropsWithRef<'span'>;

const DropdownElement: React.FC<DropdownElementProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      {...props}
      className={clsxm(
        'flex min-w-full cursor-pointer px-4 py-2 font-semibold opacity-70 transition-colors duration-200 hover:bg-gray-300',
        className
      )}
    >
      {children}
    </span>
  );
};

export default DropdownElement;
