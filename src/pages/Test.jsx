import React from 'react'
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import{useState,useEffect} from "react";
import { collection, doc, getDocs, query,orderBy } from "firebase/firestore";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { db } from '../firbase';


export default function Home() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        //get refference to the document
        const productsRef=collection(db,"products");
        //create a query against the collection
        const q=query(productsRef,orderBy("timestamp","desc"));
        //execute the query
        const querySnapshot = await getDocs(q);
        const productsList=[];
        querySnapshot.forEach((doc) => {
         return productsList.push(
          {
            id:doc.id,
            data:doc.data()
          }
         )
        });
        setProduct(productsList);
        console.log(productsList);

      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };
    fetchProduct();
  },[]);



  return (
  <main>
     <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2500 }}
        pagination={{ type: "progressbar" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="../assets/image1.jpg" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/image2.jpg" alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/image3.jpg" alt="slide3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../assets/image4.jpg" alt="slide4" />
        </SwiperSlide>
      </Swiper>
      <div className='mt-20'>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl text-green-800 font-bold lg:text-6xl">
          Welcome to <span className='text-teal-500'>Luxemart</span> Family!!
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          
"Embark on a journey of discovery with Luxemart Supermarket's Admin Panel, where efficiency meets convenience. Navigate through a seamless interface designed for supermarket staff, enabling effortless product management. Whether you're restocking shelves, updating prices, or fine-tuning inventory, our platform provides the tools you need to streamline operations and elevate your supermarket experience. Join us in revolutionizing the way you manage inventory, one click at a time."
        </p>
        <Link
          to="/profile"
          className="text-xs sm:text-sm text-gray-700 font-bold hover:underline"
        >
          For handle products
        </Link>
      </div>
      <div className='mt-10'>
      <h2 className="text-3xl text-green-600  lg:text-4xl text-center">All Products</h2>

      </div>
      </div>
  </main>
  )
}
