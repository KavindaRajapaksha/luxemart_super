import React from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";


export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [pageState,setPageState]=useState();
    const auth = getAuth();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setPageState("Profile");
        } else {
          setPageState("Sign in");
        }
      });
    }, [auth]);
    function pathMatchRoute(route) {
        if (route === location.pathname) {
          return true;
        }
      }
    
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://www.hsbc.lk/content/dam/hsbc/lk/images/credit-cards/offers/16-9/keels-logo-pwsimg-1400.jpg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        <div>
            <ul className="flex space-x-10">
                <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-green-600 border-b-green-900"
              }`}
              onClick={() => navigate("/")} >
                    Home
                </li>
                <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-green-600 border-b-green-900"
              }`}
              onClick={() => navigate("/offers")}>
                    Categories
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-green-600 border-b-green-900"
              }`}
              onClick={() => navigate("/profile")}>
                   {pageState}
                </li>
            </ul>
        </div>
      </header>
    </div>
  );
}
