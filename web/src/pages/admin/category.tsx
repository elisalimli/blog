import CreateCategoryModal from '@/components/Modals/Category/CreateCategoryModal';
import NextImage from '@/components/NextImage';
import { withDashboard } from '@/components/utils/withDashboard';
import { useCategoriesQuery } from '@/generated/graphql';
import Divider from '@/ui/Divider';
import dayjs from 'dayjs';
import React from 'react';

const Admin: React.FC = () => {
  const [{ data }] = useCategoriesQuery();
  return (
    <div className='py-12'>
      <header>
        <h1 className='text-5xl text-gray-800'>Category</h1>
      </header>
      <Divider className='my-4' />

      <div>
        <CreateCategoryModal />
        <table className='gfg w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead className='text-xs uppercase text-gray-500'>
            <tr>
              <th className='text-center'>Image</th>
              <th className='text-center'>Title</th>
              <th className='text-center'>Description</th>
              <th className='text-center'>Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.categories?.map(({ id, name, pictureUrl, createdAt }) => {
              return (
                <tr
                  className='odd:bg-white even:bg-gray-50'
                  key={`admin-post-${id}`}
                >
                  <td className='flex justify-center'>
                    <NextImage
                      useSkeleton
                      src={pictureUrl as string}
                      width={240}
                      imgClassName='rounded-lg'
                      height={120}
                      objectFit='cover' // change to suit your needs
                      alt='Icon'
                    />
                  </td>
                  <td className='text-center'>{name}</td>
                  <td className='text-center'>Earth, Wind, and Fire</td>
                  <td className='text-center'>
                    {dayjs(createdAt).format('MMM D, YYYY')}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default withDashboard(Admin);
