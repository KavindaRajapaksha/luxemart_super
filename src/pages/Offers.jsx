import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firbase';
import Spinner from '../components/Spinner';
import ListingItem from '../components/ListingItems'

export default function Offers() {
  const [vegProducts, setVegProducts] = useState(null);
  const[meatProducts,setMeatProducts]=useState(null);
  const[beveragesProducts,setBeveragesProducts]=useState(null);
  const[desertsProducts,setDesertsProducts]=useState(null);
  const[snacksProducts,setSnacksProducts]=useState(null);
  const[educationalProducts,setEducationalProducts]=useState(null);
  const[beautyProducts,setBeautyProducts]=useState(null);

  


  // Fetching the vegitables products
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const productRef = collection(db, "products");
        // create the query
        const q = query(
          productRef,
          where("category", "==", 
          "Vegetables"),
          orderBy("timestamp", "desc")
        );
        // execute the query
        const querySnap = await getDocs(q);
        const products = [];
        querySnap.forEach((doc) => {
          return products.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setVegProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  // Fetching the meat products
 useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const productRef = collection(db, "products");
        // create the query
        const q = query(
          productRef,
          where("category", "==", 
          "Meats"),
          orderBy("timestamp", "desc")
        );
        // execute the query
        const querySnap = await getDocs(q);
        const products = [];
        querySnap.forEach((doc) => {
          return products.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setMeatProducts(products);
    
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  });
  // Fetching the beverages products
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const productRef = collection(db, "products");
        // create the query
        const q = query(
          productRef,
          where("category", "==", 
          "Beverages"),
          orderBy("timestamp", "desc")
        );
        // execute the query
        const querySnap = await getDocs(q);
        const products = [];
        querySnap.forEach((doc) => {
          return products.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setBeveragesProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  });
  // Fetching the deserts products
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const productRef = collection(db, "products");
        // create the query
        const q = query(
          productRef,
          where("category", "==", 
          "Deserts"),
          orderBy("timestamp", "desc")
        );
        // execute the query
        const querySnap = await getDocs(q);
        const products = [];
        querySnap.forEach((doc) => {
          return products.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setDesertsProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  });
  // Fetching the snacks products
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const productRef = collection(db, "products");
        // create the query
        const q = query(
          productRef,
          where("category", "==", 
          "Snacks"),
          orderBy("timestamp", "desc")
        );
        // execute the query
        const querySnap = await getDocs(q);
        const products = [];
        querySnap.forEach((doc) => {
          return products.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSnacksProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  });
  // Fetching the educational products
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const productRef = collection(db, "products");
        // create the query
        const q = query(
          productRef,
          where("category", "==",
          "Educational"),
          orderBy("timestamp", "desc")
        );
        // execute the query
        const querySnap = await getDocs(q);
        const products = [];
        querySnap.forEach((doc) => {
          return products.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setEducationalProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  });
  // Fetching the beauty products
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const productRef = collection(db, "products");
        // create the query
        const q = query(
          productRef,
          where("category", "==",
          "Beauty"),
          orderBy("timestamp", "desc")
        );
        // execute the query
        const querySnap = await getDocs(q);
        const products = [];
        querySnap.forEach((doc) => {
          return products.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setBeautyProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  });






  if (!vegProducts) {
    return <Spinner />;
  }
  if (!meatProducts) {
    return <Spinner />;
  }












  return(
    <main>
      <div>
        <h1 className="text-2xl font-semibold text-center text-green-900 mt-15 my-8">Products under the Categories</h1>
      </div>
      <div className="max-w-6xl px-3 mt-6 mx-auto">
      {vegProducts && vegProducts.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-xl mt-6 text-center text-green-700 mb-10" >vegitables</h2>
         
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {vegProducts.map((product) => (
                <ListingItem
                  key={product.id}
                  products={product.data}
                  id={product.id}
                />
              ))}
            </ul>
          </div>
        )}
        {meatProducts && meatProducts.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-xl mt-6 text-center text-green-700 mb-10" >Meats</h2>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {meatProducts.map((product) => (
                <ListingItem
                  key={product.id}
                  products={product.data}
                  id={product.id}
                />
              ))}
            </ul>
          </div>
        )}
        {beveragesProducts && beveragesProducts.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-xl mt-6 text-center text-green-700 mb-10" >Beverages</h2>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {beveragesProducts.map((product) => (
                <ListingItem
                  key={product.id}
                  products={product.data}
                  id={product.id}
                />
              ))}
            </ul>
          </div>
        )}
        {desertsProducts && desertsProducts.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-xl mt-6 text-center text-green-700 mb-10" >Deserts</h2>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {desertsProducts.map((product) => (
                <ListingItem
                  key={product.id}
                  products={product.data}
                  id={product.id}
                />
              ))}
            </ul>
          </div>
        )}
        {snacksProducts && snacksProducts.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-xl mt-6 text-center text-green-700 mb-10" >Snacks</h2>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {snacksProducts.map((product) => (
                <ListingItem
                  key={product.id}
                  products={product.data}
                  id={product.id}
                />
              ))}
            </ul>
          </div>
        )}
        {educationalProducts && educationalProducts.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-xl mt-6 text-center text-green-700 mb-10" >Educational</h2>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {educationalProducts.map((product) => (
                <ListingItem
                  key={product.id}
                  products={product.data}
                  id={product.id}
                />
              ))}
            </ul>
          </div>
        )}
        {beautyProducts && beautyProducts.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-xl mt-6 text-center text-green-700 mb-10" >Beauty</h2>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {beautyProducts.map((product) => (
                <ListingItem
                  key={product.id}
                  products={product.data}
                  id={product.id}
                />
              ))}
            </ul>
          </div>
        )}
        

      
      </div>
    </main>
  )
}
