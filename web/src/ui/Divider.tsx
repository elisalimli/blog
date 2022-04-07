import React from 'react';

export type DividerProps = React.ComponentPropsWithRef<'hr'>;

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ ...rest }, ref) => {
    return <hr {...rest} />;
  }
);

export default Divider;
