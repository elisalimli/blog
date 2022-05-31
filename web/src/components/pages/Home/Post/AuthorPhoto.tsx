import React from 'react';
import NextImage from '@/components/NextImage';

const AuthorPhoto: React.FC = () => {
  return (
    <NextImage
      alt='author photo'
      imgClassName='rounded-full'
      width={32}
      height={32}
      src='https://lh3.googleusercontent.com/a-/AOh14GiSINvYwuxOvaE-6xcAcI2OeGXRXwhF7TN5Zqtz=s96-c'
    />
  );
};
export default AuthorPhoto;
