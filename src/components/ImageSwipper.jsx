import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ImageSwiper = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <Swiper
        modules={[ Autoplay]}
        //effect="fade"
        slidesPerView={1}
        spaceBetween={40}
        navigation
        autoplay={{ delay: 2500 }}
        //pagination={{ type: 'progressbar' }}
        className="mySwiper"
        style={{ marginTop: '0',width: '100%', height: '200px' }}
      >
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/thanksgiving-day-meal-with-copy-space_23-2149100110.jpg?t=st=1714901415~exp=1714905015~hmac=c0a62f1df0b199adf2b9859c24be30bc6effe7fd4d7983f1950c35df26d6bc17&w=1060' alt="slide1" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/abundance-fresh-healthy-fruits-vegetables-generated-by-ai_188544-42439.jpg?t=st=1714904610~exp=1714908210~hmac=c169c4e4165b89c38efd3262b4ed685116def51ca3ab6e7b92d18963ddb3128f&w=1060' alt="slide2" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/top-view-fresh-vegetables-with-lentil-oil-grey-surface_114579-42799.jpg?t=st=1714905981~exp=1714909581~hmac=708a4e0ef640091048601ee430389883d5305d209e9ac7cbeb090bfba00f27ea&w=996' alt="slide3" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/thanksgiving-day-meal-with-copy-space_23-2149100110.jpg?t=st=1714901415~exp=1714905015~hmac=c0a62f1df0b199adf2b9859c24be30bc6effe7fd4d7983f1950c35df26d6bc17&w=1060' alt="slide1" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/abundance-fresh-healthy-fruits-vegetables-generated-by-ai_188544-42439.jpg?t=st=1714904610~exp=1714908210~hmac=c169c4e4165b89c38efd3262b4ed685116def51ca3ab6e7b92d18963ddb3128f&w=1060' alt="slide2" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/top-view-fresh-vegetables-with-lentil-oil-grey-surface_114579-42799.jpg?t=st=1714905981~exp=1714909581~hmac=708a4e0ef640091048601ee430389883d5305d209e9ac7cbeb090bfba00f27ea&w=996' alt="slide3" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default ImageSwiper;
