import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: '',
  });
  const{email} = formData;
  
 
  const handleChange=(e)=>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(formData);
    
  }



  return (
    <section>
      <h1 className='text-3xl text-center mt-6 text-green-900'>Reset Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src='https://storage.needpix.com/rsynced_images/grocery-2932906_1280.jpg' alt='key'  className='w-full rounded-2xl'/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
              
          </form>
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6 text-sm">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
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
              send reset email
            </button>
            <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth/>
        </div>
      </div>
    </section>
  )
}
