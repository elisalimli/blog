import React, { useEffect, useRef, useState, FC } from 'react';
import { useClickOutside } from '@/utils/hooks/useClickOutside';

export interface DropdownProps {
  button: () => any;
  fixed?: boolean;
  onHover?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  button,
  children,
  fixed = true,
  onHover = false,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const useHandleClick = (e: MouseEvent) => {
      useClickOutside(wrapperRef, buttonRef, e.target, setOpen);
    };
    if (!onHover) {
      document.addEventListener('mousedown', useHandleClick);

      return () => {
        document.removeEventListener('mousedown', useHandleClick);
      };
    }
  });

  return (
    <div className='relative'>
      <div
        onMouseLeave={onHover ? () => setOpen(false) : undefined}
        onMouseEnter={onHover ? () => setOpen(true) : undefined}
        className='flex justify-end'
      >
        <div ref={buttonRef}>
          <button
            onClick={() => setOpen(!open)}
            type='button'
            className='focus:outline-none'
          >
            {button()}
          </button>
        </div>
      </div>
      {open ? (
        <div
          onMouseLeave={onHover ? () => setOpen(false) : undefined}
          onMouseEnter={onHover ? () => setOpen(true) : undefined}
          className='absolute left-3 top-9 z-50'
        >
          <div
            className={`${fixed ? 'fixed -translate-x-full transform' : ''}`}
          >
            <div
              ref={wrapperRef}
              style={{
                maxWidth: 200,
                minHeight: 100,
              }}
              className='rounded-8 relative overflow-hidden border bg-white'
            >
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
