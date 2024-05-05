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
        spaceBetween={'100%'}
        navigation
        autoplay={{ delay: 2500 }}
        //pagination={{ type: 'progressbar' }}
        className="mySwiper"
        style={{ marginTop: '0',width: '100%', height: '200px' }}
      >
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/flat-lay-roped-label-lunch-box_23-2147866412.jpg?t=st=1714905308~exp=1714908908~hmac=db0e6f3e3277231ecf089584cd006a510c98f2413cc38c6f9f0866cf617398c4&w=1060' alt="slide1" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/composition-black-friday-shopping-cart-with-copy-space_23-2148667046.jpg?t=st=1714905658~exp=1714909258~hmac=a7381b00e93f5d74473a4d013aef3d5a54a9fd78f1638d96246b78f7eee502bf&w=1060' alt="slide2" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/top-view-assortment-different-fresh-vegetables-with-copy-space_23-2148655293.jpg?t=st=1714905467~exp=1714909067~hmac=4f27a7c39b558e7721bd54041013e771ad68eaf990fb34025f3e872b92cb3b0e&w=1060' alt="slide3" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/flat-lay-roped-label-lunch-box_23-2147866412.jpg?t=st=1714905308~exp=1714908908~hmac=db0e6f3e3277231ecf089584cd006a510c98f2413cc38c6f9f0866cf617398c4&w=1060' alt="slide1" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/composition-black-friday-shopping-cart-with-copy-space_23-2148667046.jpg?t=st=1714905658~exp=1714909258~hmac=a7381b00e93f5d74473a4d013aef3d5a54a9fd78f1638d96246b78f7eee502bf&w=1060' alt="slide2" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-8 px-4 md:m-5'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='mt-7'>
              <img src='https://img.freepik.com/free-photo/top-view-assortment-different-fresh-vegetables-with-copy-space_23-2148655293.jpg?t=st=1714905467~exp=1714909067~hmac=4f27a7c39b558e7721bd54041013e771ad68eaf990fb34025f3e872b92cb3b0e&w=1060' alt="slide3" style={{ width: '100%' }} />
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
}

export default ImageSwiper;
