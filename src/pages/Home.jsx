import React, { useState, useEffect } from 'react';
//import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
//import { Swiper, SwiperSlide } from 'swiper/react';
import { collection, query, getDocs, orderBy, limit, startAfter } from 'firebase/firestore';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { db } from '../firbase';
import {toast} from "react-toastify";
import Spinner from '../components/Spinner';
import ListingItems from '../components/ListingItems';
import ImageSwipper from '../components/ImageSwipper';




export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastFetchProduct, setLastFetchProduct] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        const q = query(productsRef, orderBy('timestamp', 'desc'),limit(12));
       
        const querySnapshot = await getDocs(q);
        const lastFetchProduct=querySnapshot.docs[querySnapshot.docs.length-1];
        setLastFetchProduct(lastFetchProduct);

        if (!querySnapshot.empty) {
          const productsList = [];
          querySnapshot.forEach(doc => {
            productsList.push({
              id: doc.id,
              data: doc.data()
            });
          });
          setProducts(productsList);
          setLoading(false);
        } else {
          toast.error("No products found");
          setLoading(false); // Set loading to false even if no products found
        }
      } catch (error) {
       toast.error("Error fetching products");
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchProducts();
  }, []);
  const onFetchMoreProducts = async () => {
    try {
      if (!lastFetchProduct) {
        console.error('Last fetched product is null');
        return;
      }
  
      const productsRef = collection(db, 'products');
      const q = query(productsRef, orderBy('timestamp', 'desc'), startAfter(lastFetchProduct), limit(4));
  
      const querySnapshot = await getDocs(q);
      const lastProduct = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastFetchProduct(lastProduct);
  
      if (!querySnapshot.empty) {
        const newProductsList = [];
        querySnapshot.forEach(doc => {
          newProductsList.push({
            id: doc.id,
            data: doc.data()
          });
        });
        setProducts(prevProducts => [...prevProducts, ...newProductsList]);
      } else {
        toast.error('No more products found');
      }
    } catch (error) {
      console.error('Error fetching more products:', error);
      toast.error('Error fetching more products');
    }
  };
  
  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <section 
      ><p><ImageSwipper/></p></section>

      <div className="mt-5">
        <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
          <h1 className="text-3xl text-green-800 font-bold lg:text-6xl">
            Welcome to <span className="text-teal-500">Luxemart</span> Family!!
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            "Embark on a journey of discovery with Luxemart Supermarket's Admin Panel, where efficiency meets convenience. Navigate through a seamless interface designed for supermarket staff, enabling effortless product management. Whether you're restocking shelves, updating prices, or fine-tuning inventory, our platform provides the tools you need to streamline operations and elevate your supermarket experience. Join us in revolutionizing the way you manage inventory, one click at a time."
          </p>
          <Link to="/profile" className="text-xs sm:text-sm text-gray-700 font-bold hover:underline">
            For handle products
          </Link>
        </div>
        <></>
        <div className="max-w-6xl px-3 mt-6 mx-auto">
        {!loading && products.length>0 && (
          <>
          <h2 className="text-3xl mb-20 text-green-600 lg:text-4xl text-center">All Products</h2>
            
            <ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
              {products.map((product) => (  
               <ListingItems key={product.id} products={product.data} id={product.id}
                />
              ))}
            </ul>
          </>
        )}
      </div>
      {lastFetchProduct && (
            <div className="flex justify-center items-center">
              <button
                onClick={onFetchMoreProducts}
                className="bg-white px-3 py-1.5 text-gray-700 border border-gray-300 mb-6 mt-6 hover:border-slate-600 rounded transition duration-150 ease-in-out"
              >
                Load more
              </button>
            </div>
          )}
      </div>
     
    </main>
  );
}
