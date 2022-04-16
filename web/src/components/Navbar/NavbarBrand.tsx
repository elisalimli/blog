import LgLogo from '@/ui/icons/LogoIcon';
import UnstyledLink from '@/ui/links/UnstyledLink';
import { defaultMeta } from '@/ui/Seo';

const NavbarBrand = () => {
  return (
    <div>
      <UnstyledLink href='/' aria-label={defaultMeta.title}>
        <div className='flex items-center justify-between'>
          <div className='mr-3'>
            <LgLogo width={36} height={36} />
          </div>
          <h1 className='hidden h-6 items-center text-2xl font-semibold  sm:flex sm:items-center'>
            {defaultMeta.title}
          </h1>
        </div>
      </UnstyledLink>
    </div>
  );
};
export default NavbarBrand;
