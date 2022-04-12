import React, { useEffect, useRef, useState, FC } from 'react';
import { useClickOutside } from '@/utils/hooks/useClickOutside';

export interface DropdownProps {
  button: any;
  elements: any;
  fixed?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  button,
  elements,
  fixed = true,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const useHandleClick = (e: MouseEvent) => {
      useClickOutside(wrapperRef, buttonRef, e.target, setOpen);
    };
    document.addEventListener('mousedown', useHandleClick);
    return () => {
      document.removeEventListener('mousedown', useHandleClick);
    };
  });

  return (
    <div className='relative'>
      <div className='flex justify-end'>
        <div ref={buttonRef}>
          <button
            onClick={() => setOpen(!open)}
            type='button'
            className='focus:outline-none'
          >
            {button}
          </button>
        </div>
      </div>
      {open ? (
        <div className={`absolute right-3 z-50 md:right-0 `}>
          <div
            className={`${fixed ? 'fixed -translate-x-full transform' : ''}`}
          >
            <div
              ref={wrapperRef}
              style={{
                width: 200,
                minHeight: 100,
              }}
              className='rounded-8 relative overflow-hidden border  bg-white'
            >
              {elements}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
