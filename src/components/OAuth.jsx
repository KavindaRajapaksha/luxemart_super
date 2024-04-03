import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { db } from '../firbase';
import { doc, getDoc,setDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';

export default function OAuth() {
  const navigate=useNavigate();

  const onGoogleClick = async () => {
    try{
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result= await signInWithPopup(auth, provider);
      const user=result.user;
      console.log(user);
      //check if user is new or existing
      //if new add to the data base
      const docRef=doc(db,'users',user.uid);
      const docSnap= await getDoc(docRef);
      if(!docSnap.exists()){
        await setDoc(docRef,{
          email:user.email,
          userName:user.displayName,
          timestamp:serverTimestamp(),
        });
      }
  navigate('/')

    }catch(error){
      toast.error("Something went wrong in the google authentication.");
      console.error(error);
    }
  }


  return (
     


    <button
    type="button"
    onClick={onGoogleClick}
    className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
  >
    <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
    Continue with Google
  </button>
  )
}
