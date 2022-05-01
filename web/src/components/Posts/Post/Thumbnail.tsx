import React from 'react';
import NextImage from '../../NextImage';

interface ThumbnailProps {
  ytId: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ ytId }) => {
  return (
    <NextImage
      useSkeleton
      // priority
      src={`http://i.ytimg.com/vi/${ytId}/mqdefault.jpg`}
      // src='https://theodorusclarence.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftheodorusclarence%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Cc_fill%2Car_5%3A2%2Cw_1200%2Ftheodorusclarence%2Fbanner%2Fmarkus-winkler-EcgyryGygeE-unsplash_vuovbv&w=3840&q=75'
      width={320}
      height={180}
      objectFit='cover' // change to suit your needs
      className='w-full'
      alt='Icon'
    />
  );
};
export default Thumbnail;
