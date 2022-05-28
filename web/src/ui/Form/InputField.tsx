import Label from '@/ui/Form/Label';
import { useField } from 'formik';
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string | boolean;
    Icon?: any;
    name: string;
    textarea?: boolean;
  };

// '' => false
// 'error message stuff' => true

const InputField: React.FC<InputFieldProps> = ({
  label = false,
  textarea,
  size: _,
  Icon,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <div>
      {label && <Label fieldName={field.name}>{label}</Label>}
      <div className='input-wrapper'>
        {Icon && (
          <button type='submit' className='outline-none' tabIndex={-1}>
            <Icon className='ml-2' size={25} />
          </button>
        )}

        {textarea ? (
          <textarea
            className='input border-0 focus:border-0 focus:ring-0'
            {...field}
            {...props}
            id={field.name}
          />
        ) : (
          <input className='input' {...field} {...props} id={field.name} />
        )}
      </div>
      {error && <div className='error'>{error}</div>}
    </div>
  );
};
export default InputField;
