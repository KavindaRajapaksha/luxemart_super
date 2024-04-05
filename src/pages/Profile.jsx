import React from "react";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { db } from "../firbase";
import { doc, updateDoc } from "firebase/firestore";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    userName: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { userName, email } = formData;

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  const onSubmit = async () => {
    try {
      //update name in firebase auth
      if (auth.currentUser.displayName !== userName) {
        await updateProfile(auth.currentUser, {
          displayName: userName,
        });
        //update the user name in the database
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          userName: userName,
        });
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error("Could not update profile. Please try again.");
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value});
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 text-green-900">
          Your Profile
        </h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="userName"
              value={userName}
              disabled={!changeDetail}
              onChange={handleChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your user name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
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
          <button type="submit" className="  w-full bg-green-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-green-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-800">
          <Link to='/create-list' className="flex justify-center items-center">
          <RiShoppingBag3Fill className="mr-2 text-3xl  rounded-full p-1 border-2"/>
            Add Items
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
