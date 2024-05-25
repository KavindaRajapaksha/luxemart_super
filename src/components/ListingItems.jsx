import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";


export default function ListingItems({ products, id,onEdit,onDelete }) {
  // Check if product or name is undefined/null before rendering
//   if (!product || !product.title) {
//     return null; // Or any other handling logic you prefer
//   }
// if (!products || !products.data || !products.data.category) {
//   return null; // Or any other handling logic you prefer
// }

return (
  <li className=" custom-frame relative bg-white flex flex-col justify-between items-center shadow-md border border-black-200 hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
   <Link to={`/category/${products.category}/${id}`}>
       <div>
       <img className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
         loading="lazy" src={products.imgUrl[0]} alt={products.title} />
       <Moment  className="absolute top-2 left-2 bg-[#185d1d] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg" fromNow>
       {products.timestamp?.toDate()}
       </Moment>
       <div className="w-full p-[10px]">
        <p className='font-semibold m-0 text-xl text-center truncate'>{products.title}</p>
        <p className='text-[#2c4d3a] mt-3 text-m'>Price : Rs. {products.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p>
        <p id="discountPrice" className='text-[#e53d3d] font-bold text-md'>Discount : Rs. {products.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p>
           <p>Category: <span className='text-[#277622] text-m'>{products.category}</span></p>
       </div>
       
       </div>
     

   </Link>
    {onDelete && (
        <FaTrash
          className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-700"
          onClick={() => onDelete(products.id)}
        />
      )}
      {onEdit && (
        <MdEdit
          className="absolute bottom-2 right-7 h-4 cursor-pointer "
          onClick={() => onEdit(products.id)}
        />
      )}
   </li>
  );
}
