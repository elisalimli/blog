import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, { UnstyledLinkProps } from '@/ui/links/UnstyledLink';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'animated-underline inline-flex items-center font-semibold',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'border-b  border-transparent ',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;
