import { defaultMeta } from '@/ui/Seo';

const NavbarBrand = () => {
  return (
    <h1 className='hidden h-6 items-center text-2xl font-semibold  sm:flex sm:items-center'>
      {defaultMeta.title}
    </h1>
  );
};
export default NavbarBrand;
