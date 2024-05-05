import React from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Link } from "react-router-dom";


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
        <Link
              to="/"
              className="text-sm sm:text-xl font-semibold text-green-900"
            >
              <span className="px-1.5 py-0.4 bg-gradient-to-r from-green-900 via-green-700 to-green-400 rounded-lg text-white">
                LUXEMART
              </span>{" "}
              Super
            </Link>
        </div>
        <div>
        <ul className="flex space-x-10">
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                            pathMatchRoute("/") && "text-green-600 border-b-green-700"
                            }`}
                            onClick={() => navigate("/")}>
                            Home
                        </li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                            pathMatchRoute("/offers") && "text-green-600 border-b-green-700"
                            }`}
                            onClick={() => navigate("/offers")}>
                            Categories
                        </li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                            pathMatchRoute("/about") && "text-green-600 border-b-green-700"
                            }`}
                            onClick={() => navigate("/about")} >
                            About
                        </li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                            (pathMatchRoute("/profile") || pathMatchRoute("/sign-in")) && "text-green-600 border-b-green-700"
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
