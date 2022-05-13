import CenteredLoading from '@/components/CenteredLoading';
import { useCategoriesQuery } from '@/generated/graphql';
import React from 'react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
        slidesPerView={4}
        spaceBetween={50}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Pagination]}
        className='select-none'
      >
        {data?.categories?.map((c) => (
          <SwiperSlide style={{ height: 500 }} key={`category-${c.id}`}>
            {/* <div>{c.name}</div> */}
            <div className='relative'>
              <div
                style={{
                  background:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
                }}
                className='absolute bottom-0 w-full p-4 text-white'
              >
                <h6 className='text-lg font-bold uppercase'>{c.name}</h6>
                <p>Category description</p>
                <div className='mt-2 h-2 w-8 rounded-xl bg-primary-500' />
              </div>
              <img
                className='rounded-md'
                alt={`category(${c.name}) image`}
                title={c.name.toLowerCase()}
                height={400}
                src='http://www.travelgram.com/content/img/photo/new-york.jpg'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Categories;
