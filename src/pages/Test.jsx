import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firbase';
import Spinner from '../components/Spinner';
import { Navigation, Pagination,Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';




export default function Listing() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, 'products', params.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProduct(docSnap.data());
                    setLoading(false);
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document: ', error);
            }
        };
        fetchProduct();
    }, [params.id]);

    if (loading) {
        return <Spinner />;
    }
    // return <div>{product.title}</div>
    return (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true ,type: "progressbar"  }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fsupermarket&psig=AOvVaw3PubI-v842spaCbPHjhu1i&ust=1712550260660000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjXooChr4UDFQAAAAAdAAAAABAE" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fsearch%3Fq%3Dgrocery%2Bsupermarket&psig=AOvVaw3PubI-v842spaCbPHjhu1i&ust=1712550260660000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjXooChr4UDFQAAAAAdAAAAABAI' alt='slide2'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gobankingrates.com%2Fsaving-money%2Ffood%2Fcostly-mistakes-making-grocery-shopping%2F&psig=AOvVaw3PubI-v842spaCbPHjhu1i&ust=1712550260660000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjXooChr4UDFQAAAAAdAAAAABAQ' alt='slide3'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fsebenarnya.my%2Fgrocery-shopping%2F&psig=AOvVaw3PubI-v842spaCbPHjhu1i&ust=1712550260660000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjXooChr4UDFQAAAAAdAAAAABAf' alt='slide4'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.savings.com.au%2Fsavings-accounts%2Ftwenty-ways-to-save-money-on-groceries-savings-com-au&psig=AOvVaw3PubI-v842spaCbPHjhu1i&ust=1712550260660000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjXooChr4UDFQAAAAAdAAAAABAv' alt='slide5'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fsashares.co.za%2Fcredit-cards%2Fcredit-cards-for-groceries%2F&psig=AOvVaw3PubI-v842spaCbPHjhu1i&ust=1712550260660000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjXooChr4UDFQAAAAAdAAAAABA_' alt='slide6'/>
          </SwiperSlide>
        </Swiper>
      );
   

}
