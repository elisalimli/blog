import React from 'react';
import NextImage from '@/components/NextImage';

type ThumbnailProps = {
  ytId: string;
};
{
  /* <NextImage
useSkeleton
src='https://picsum.photos/400/700'
width={250}
height={520}
objectFit='cover' // change to suit your needs
className='w-full'
imgClassName='rounded-lg rounded-b-none'
alt='Post image'
/> */
}
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
