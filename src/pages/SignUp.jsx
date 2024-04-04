import React from 'react'
import { useState } from 'react'
import { AiFillEyeInvisible,AiFillEye  } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {db} from '../firbase.js';
import { serverTimestamp, setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';




export default function SignUp() {
  const[showPassword,setShowPassword]=useState(false)
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    mobileNumber: '',
    
  })
  const{email,password,userName,mobileNumber} = formData;
  const navigate = useNavigate();
  const handleChange=(e)=>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
  
      // await updatePhoneNumber(auth.currentUser, mobileNumber);
  
      const user = userCredential.user;
      console.log(user);
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
     await setDoc(doc(db, 'users', user.uid), formDataCopy);
     toast.success("Sign up successful!");
     navigate('/')

    } catch (error) {
      toast.error("Something went wrong in the sign up process. Please try again.");
    }
  };
  




  return (
    <section>
      <h1 className='text-3xl text-center mt-6 text-green-900'>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src='https://storage.needpix.com/rsynced_images/grocery-2932906_1280.jpg' alt='key'  className='w-full rounded-2xl'/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleSubmit}>
            <input type="text"
              id="userName"
              value={userName}
              onChange={handleChange}
              placeholder="User name"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
              <input type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleChange}
              placeholder="Mobile number"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
              <input type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
              <div className="relative mb-6">
              <input
               type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handleChange}
              placeholder="password"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
               {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer "
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
              </div>
         
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6 text-sm">
                Have a account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
              <p className='text-sm'>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out "
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium  rounded shadow-md uppercase hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 "
              type="submit"
            >
              Sign up
            </button>
            <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth/>
            </form>
        </div>
      </div>
    </section>
  )
}
