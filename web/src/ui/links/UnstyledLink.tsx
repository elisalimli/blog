import Link, { LinkProps } from 'next/link';
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
      <Link
        ref={ref}
        // target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
      >
        <a className={className}>{children}</a>
      </Link>
    );
  }
);

export default React.memo(UnstyledLink);
