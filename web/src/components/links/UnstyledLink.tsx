import { LinkProps } from 'next/link';
import * as React from 'react';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, className, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        // target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={className}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
