import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import Offers from './pages/Offers';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from './pages/CreateListing';




function App() {
  return (
   <>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path='/profile' element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile />} />
      </Route>
      
      <Route path="/offers" element={<Offers />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/create-list" element={<CreateListing />} />
    
    </Routes>


  </Router>
  
  <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />


   </>
  );
}

export default App;
