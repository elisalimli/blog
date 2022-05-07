import React from 'react';

interface ILabelProps {
  fieldName: string;
}

const Label: React.FC<ILabelProps> = ({ children, fieldName }) => {
  return (
    <label className='label' htmlFor={fieldName}>
      {children}
    </label>
  );
};

export default Label;
