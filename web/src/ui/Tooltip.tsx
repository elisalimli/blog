import React from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <ReactTooltip type='dark' effect='solid' place='bottom' {...props}>
      {children}
    </ReactTooltip>
  );
};

export default Tooltip;
