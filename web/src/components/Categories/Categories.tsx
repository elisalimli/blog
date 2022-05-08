import CenteredLoading from '@/components/CenteredLoading';
import { useCategoriesQuery } from '@/generated/graphql';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import defaultTheme from 'tailwindcss/defaultTheme';

const Categories: React.FC = () => {
  //@todo make this hook
  const isMobile = useMediaQuery({ maxWidth: defaultTheme?.screens?.md });
  const [{ data, fetching }] = useCategoriesQuery();
  if (fetching) {
    return <CenteredLoading />;
  }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Pagination]}
        className='select-none'
      >
        <SwiperSlide className='bg-red-500'>
          <div className='h-40 w-40'>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};
export default Categories;
