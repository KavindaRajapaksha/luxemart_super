import React from 'react';

export default function ListingItems({ products, id }) {
  // Check if product or name is undefined/null before rendering
//   if (!product || !product.title) {
//     return null; // Or any other handling logic you prefer
//   }

  return (
    <div>
      {products.title}
    </div>
  );
}
