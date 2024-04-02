import React from "react";
import {useLocation,useNavigate} from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
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
                pathMatchRoute("/") && "text-black border-b-green-600"
              }`}
              onClick={() => navigate("/")} >
                    Home
                </li>
                <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-green-600"
              }`}
              onClick={() => navigate("/offers")}>
                    Offers
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-green-600"
              }`}
              onClick={() => navigate("/profile")}>
                   Sign in
                </li>
            </ul>
        </div>
      </header>
    </div>
  );
}
