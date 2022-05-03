import Divider from '@/ui/Divider';
import Logo from '@/ui/icons/LogoIcon';
import UnstyledLink from '@/ui/links/UnstyledLink';
import { useRouter } from 'next/router';
import React from 'react';
import { BsCreditCard } from 'react-icons/bs';
import { useAdminQuery } from '@/generated/graphql';
import clsxm from '../../lib/clsxm';

export const withSidebar = (WrappedComponent: React.FC) => {
  const HOC = React.memo(() => {
    const [{ data, fetching }] = useAdminQuery();
    const router = useRouter();

    if (fetching) {
      return <div>loading...</div>;
    } else if (!data?.me) {
      router.replace('/');
    }
    // console.log('router', , '/admin' + '/salam');
    return (
      <div className='grid min-h-screen grid-cols-10 gap-4'>
        {/* @todo make this variable */}
        <div
          className='col-span-2'
          style={{ backgroundColor: 'rgb(29,41,57)' }}
        >
          <div className='px-8 py-6 pb-4'>
            <Logo fill='#fff' />
            <h1 className='h2 text mt-2 font-semibold text-gray-200'>
              Settings
            </h1>
          </div>
          <Divider className='mb-1 border-gray-800' />
          <div className='flex flex-col-reverse divide-y divide-y-reverse'>
            {[
              {
                Icon: BsCreditCard,
                text: 'View/Edit/Create post',
                href: '/',
              },
            ].map(({ Icon, text, href }, i) => (
              <UnstyledLink
                key={`admin-sidebar-link-${i}`}
                href={`/admin/${href}`}
              >
                <div
                  className={clsxm([
                    'flex p-4 text-gray-400 transition-colors duration-200 hover:bg-gray-900',
                    router.route + '/' == `/admin${href}` &&
                      'bg-primary-500 text-white',
                  ])}
                >
                  <Icon size={24} className='mr-4' />
                  <div className='text-lg'>{text}</div>
                </div>
              </UnstyledLink>
            ))}
          </div>
        </div>
        <div className='col-span-7 bg-white pl-4'>
          <WrappedComponent />
        </div>
      </div>
    );
  });
  return HOC;
};
