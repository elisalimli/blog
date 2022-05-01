import React from 'react';
import NextImage from '../../NextImage';

type ThumbnailProps = {
  ytId: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ ytId }) => {
  return (
    <NextImage
      useSkeleton
      src={`http://i.ytimg.com/vi/${ytId}/mqdefault.jpg`}
      width={320}
      height={180}
      objectFit='cover' // change to suit your needs
      className='w-full'
      alt='Icon'
    />
  );
};
export default Thumbnail;
