import React from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <ReactTooltip
      backgroundColor='var(--color-primary-700)'
      effect='solid'
      place='bottom'
      {...props}
    >
      {children}
    </ReactTooltip>
  );
};

export default Tooltip;
