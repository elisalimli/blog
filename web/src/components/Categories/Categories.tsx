import CenteredLoading from '@/components/CenteredLoading';
import { useCategoriesQuery } from '@/generated/graphql';
import React from 'react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import UnstyledLink from '@/ui/links/UnstyledLink';

const Categories: React.FC = () => {
  const [{ data, fetching }] = useCategoriesQuery();
  if (fetching) {
    return <CenteredLoading />;
  }
  // https://www.travelgram.com/content/img/photo/new-york.jpg
  return (
    <>
      {/* @todo complete this */}
      <Swiper
        spaceBetween={50}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Pagination]}
        autoHeight
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            autoHeight: true,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className='select-none'
      >
        {data?.categories?.map(({ name, id }) => (
          <SwiperSlide key={`category-${id}`}>
            <UnstyledLink href={`/search?query=${name}`}>
              <div className='relative'>
                <div
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
                  }}
                  className='absolute bottom-0 w-full p-4 text-white'
                >
                  <h6 className='text-lg font-bold uppercase'>{name}</h6>
                  <p>Category description</p>
                  <div className='mt-2 h-2 w-8 rounded-xl bg-primary-500' />
                </div>
                {/* @todo use next image ?? */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className='rounded-md'
                  alt={`category(${name}) image`}
                  title={name.toLowerCase()}
                  height={400}
                  src='http://www.travelgram.com/content/img/photo/new-york.jpg'
                />
              </div>
            </UnstyledLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Categories;
