import React from 'react';

export type DividerProps = React.ComponentPropsWithRef<'hr'>;

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(({ ...rest }) => {
  return <hr {...rest} />;
});

export default Divider;
