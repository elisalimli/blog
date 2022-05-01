import { useField } from 'formik';
import React, {
  Fragment,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import clsxm from '../lib/clsxm';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string | boolean;
    name: string;
    textarea?: boolean;
  };

// '' => false
// 'error message stuff' => true

export const textFieldStyle = {
  inputWrapper:
    'w-full bg-white text-base rounded-lg border border-gray-200 outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out',
  input: 'w-full focus:outline-none pr-2',
  error: 'text-red-600 mt-2 text-sm',
  label: 'mt-4 font-medium',
};

const InputField: React.FC<InputFieldProps> = ({
  label = false,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <Fragment>
      {label && (
        <label className={textFieldStyle.label} htmlFor={field.name}>
          {label}
        </label>
      )}
      <div
        className={clsxm([
          'flex items-center focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-200 group-autofill:bg-black ',
          textFieldStyle.inputWrapper,
        ])}
      >
        {true && (
          <button type='submit' className='outline-none' tabIndex={-1}>
            <AiOutlineSearch className='mx-2 ' size={25} />
          </button>
        )}

        {textarea ? (
          <textarea
            className={textFieldStyle.input}
            {...field}
            {...props}
            id={field.name}
          />
        ) : (
          <input
            className={textFieldStyle.input}
            {...field}
            {...props}
            id={field.name}
          />
        )}
      </div>
      {error && <div className={textFieldStyle.error}>{error}</div>}
    </Fragment>
  );
};
export default InputField;
