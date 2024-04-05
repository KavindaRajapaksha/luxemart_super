import React, { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    discountPrice: 0,
    category: "uncategorized",
    offer:true,
  });
  const { title, description, price, discountPrice, category,offer } = formData;

//   const onChange = (e) => {
//     let boolean = null;
//     if (e.target.value === "true") {
//       boolean = true;
//     }
//     if (e.target.value === "false") {
//       boolean = false;
//     }
// }

  return (
    <main className="max-w-xl px-2 mx-auto">
      <h1 className=" text-3xl text-center mt-8 text-green-900">
        Create Listing
      </h1>
      <form>
        <label htmlFor="title" className="block mt-4 text-green-900">
          Title
        </label>
        <input
          type="text"
          required
          id="title"
          value={title}
          placeholder="Enter the title of the listing"
          className="w-full border p-2 mt-1 rounded-lg"
        />
        <label htmlFor="description" className="block mt-4 text-green-900">
          Description
        </label>
        <textarea
          id="description"
            value={description}
          placeholder="Enter the description of the listing"
          className="w-full border p-2 mt-1 rounded-lg"
        />
        <label htmlFor="price" className="block mt-4 text-green-900">
          Price(LKR)
        </label>
        <input
          type="number"
          id="price"
          required
          placeholder="Price"
          value={price}
          className="w-full border p-2 mt-1 rounded-lg"
        />
        <label className="block mt-4 text-green-900">Offer</label>
        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
            value={true}
           onClick={() => setFormData({ ...formData, offer: true })}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={() => setFormData({ ...formData, offer: false })}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        {offer && (
            <>
            <label htmlFor="discountPrice" className="block mt-4 text-green-900">
          Discount Price(LKR)
        </label>
        <input
          type="number"
          id="discountPrice"
          
            value={discountPrice}
          placeholder="Discount Price"
          className="w-full border p-2 mt-1 rounded-lg"
        />
        </>
        )}
        <label htmlFor="category" className="block mt-4 text-green-900">
          Category
        </label>
        <select id="category" value={category} className="w-full border p-2 mt-1 rounded-lg">
          <option value="uncategorized">Uncategorized</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="meat">Meat Item</option>
          <option value="grocery">Grocery</option>
        </select>
        <label htmlFor="image" className="block mt-4 text-green-900">
          Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="w-full border p-2 mt-1 rounded-lg mb-6"
          required
        />
          <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-green-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
