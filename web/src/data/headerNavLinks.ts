export interface IHeaderNavLink {
  href: string;
  title: string;
}

export const headerNavLinks: IHeaderNavLink[] = [
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/about', title: 'About' },
];
