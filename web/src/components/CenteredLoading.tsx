import React from 'react';

import Loading from '@/ui/Loading';

const CenteredLoading: React.FC = () => {
  return (
    <div className='flex justify-center'>
      <Loading />
    </div>
  );
};
export default CenteredLoading;
