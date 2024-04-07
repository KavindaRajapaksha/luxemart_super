import React from 'react'
// import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
// import {useState} from 'react'
// import { db } from '../firbase'
// import { query, where } from 'firebase/firestore'
// import { getDocs, orderBy, limit } from 'firebase/firestore'
// import Spinner from '../components/Spinner'

export default function Offers() {
  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //    const productRef = db.collection('products')
  //    const q=query(productRef,where('category','==','Vegitables'),
  //     orderBy('timestamp','desc'),limit(8))
  //    const querySnapshot = await getDocs(q)
  //     const products = []
  //     querySnapshot.forEach((doc) => {
  //       return products.push(doc.data(
  //         {
  //           id: doc.id,
  //           data: doc.data(),
  //         }

  //       ))
  //     })
  //     setProducts(products)
  //     setLoading(false)
     
  //   }
  //   fetchProducts()
  // }, [])
  // if (loading) {
  //   return <Spinner />
  // }

  return (
    <main>
      <h1 className='text-2xl text-green-800 justify-center items-center text-center font-semibold mt-20 mb-10'>Here are the categories</h1>
    <div>
    <h3 className='text-2xl text-green-800 justify-center items-center text-center font-semibold mt-20 mb-10'>Vegitables</h3>

    </div>
    
    </main>
  )
}
