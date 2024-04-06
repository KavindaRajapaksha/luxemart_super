import React, { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { updateDoc, serverTimestamp, collection,getDoc,doc } from "firebase/firestore";
import { db } from "../firbase";
import {useNavigate,useParams} from "react-router-dom";

export default function EditListing() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    discountPrice: 0,
    category: "Vegetables",
    offer: true,
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const { title, description, price, discountPrice, category, offer, image } =
    formData;
    const params = useParams();

    useEffect(()=>{
        if(product &&product.userRef!==auth.currentUser.uid){
            toast.error("You are not authorized to edit this listing");
          navigate("/");
        }
        },[auth.currentUser.uid,navigate,product])



    useEffect(()=>{
   setLoading(true);
   const fetchProduct=async()=>{
         const productRef = doc(db, "products", params.id);
         const productSnap = await getDoc(productRef);
         if (productSnap.exists()) {
            setProduct(productSnap.data());
            setFormData({
              ...productSnap.data(),

            });
            setLoading(false);
         }else{
            toast.error("Product not found");
            navigate("/");  
         }
         
   }
   fetchProduct();

    },[navigate,params.id])

 

    

    

  const handleChange = (e) => {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    //files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        image: e.target.files,
      }));
    }
    //text, number, select
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]:
          e.target.id === "category"
            ? e.target.value
            : boolean ?? e.target.value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent the refreshing
    setLoading(true);
    if (+discountPrice >= +price) {
      setLoading(false);
      toast.error("Discounted price needs to be less than regular price");
      return;
    }

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };
    const imgUrl = await Promise.all(
      [...image].map((image) => storeImage(image))
    ).catch((error) => {
      setLoading(false);
      toast.error("Images not uploaded");
      return;
    });
    // console.log(imgUrl)

    const formDataCopy = {
      ...formData,
      imgUrl,
      timestamp: serverTimestamp(),
      userRef: auth.currentUser.uid,
    };

    // console.log(formDataCopy);
    //complete the database operationS
    delete formDataCopy.image;
    !formDataCopy.offer && delete formDataCopy.discountPrice;
    const docRef =doc(db, "products", params.id)
    
    await updateDoc(docRef, formDataCopy);
    setLoading(false);
    toast.success("Listing edited successfully!!");
    navigate(`/category/${formDataCopy.category}/${docRef.id}`);
  };

  //  useEffect(() => {
  //     console.log(formData);
  //   }, [formData]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="max-w-xl px-2 mx-auto">
      <h1 className=" text-3xl text-center mt-8 text-green-900">
        Edit Listing
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="block mt-4 text-green-900">
          Title
        </label>
        <input
          type="text"
          required
          id="title"
          value={title}
          onChange={handleChange}
          placeholder="Enter the title of the listing"
          className="w-full border p-2 mt-1 rounded-lg"
        />
        <label htmlFor="description" className="block mt-4 text-green-900">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleChange}
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
          onChange={handleChange}
          value={price}
          className="w-full border p-2 mt-1 rounded-lg"
        />
        <label className="block mt-4 text-green-900">Offer</label>
        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={handleChange}
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
            onClick={handleChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>
        {offer && (
          <>
            <label
              htmlFor="discountPrice"
              className="block mt-4 text-green-900"
            >
              Discounted Price(LKR)
            </label>
            <input
              type="number"
              id="discountPrice"
              value={discountPrice}
              onChange={handleChange}
              placeholder="Discounted Price"
              className="w-full border p-2 mt-1 rounded-lg"
            />
          </>
        )}
        <label htmlFor="category" className="block mt-4 text-green-900">
          Category
        </label>
        <select
          id="category"
          value={category}
          required
          onChange={handleChange}
          className="w-full border p-2 mt-1 rounded-lg"
        >
          <option value="Vegetables">Vegetables</option>
          <option value="Meats">Meats</option>
          <option value="Beverages">Beverages</option>
          <option value="Deserts">Deserts</option>
          <option value="Snacks">Snacks</option>
          <option value="Educational">Educational</option>
          <option value="Beauty">Beauty</option>
        </select>
        <label htmlFor="image" className="block mt-4 text-green-900">
          Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full border p-2 mt-1 rounded-lg mb-6"
          required
        />
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-green-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Edit Listing
        </button>
      </form>
    </main>
  );
}
