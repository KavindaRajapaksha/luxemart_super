import React from 'react'
import { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const[formData,setFormData]=useState({
    userName:auth.currentUser.displayName,
    email:auth.currentUser.email,
  })
  const{userName,email}=formData;

  const onLogout=()=>{
    auth.signOut()
    navigate('/')
    
  }
  

  return (
   <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-center mt-6 text-green-900'>
        Your Profile
      </h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
         {/* name */}
         <input type='text' id='name' value={userName}  disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-outmb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>
        {/* email */}
        <input type='email' id='email' value={email} disabled className=' mb-6  px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-outmb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out w-full'/>
        

        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your user name?
                <span
                  // onClick={() => {
                  //   changeDetail && onSubmit();
                  //   setChangeDetail((prevState) => !prevState);
                  // }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {/* {changeDetail ? "Apply change" : "Edit"} */}Edit
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
        </form>
      </div>
    </section>
   </>
  )
}
