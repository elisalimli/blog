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
      width={250}
      height={160}
      objectFit='cover' // change to suit your needs
      className='w-full'
      imgClassName='rounded-lg rounded-b-none'
      alt='Post image'
    />
  );
};
export default Thumbnail;
