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
import EditListing from './pages/EditListing';
import Listing from './pages/Listing';
import Footer from './components/Footer';
import About from './pages/About';





function App() {
  return (
   <>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />

      <Route path='/profile' element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile />} />
     </Route>

     <Route path="/create-list" element={<PrivateRoute/>}>
     <Route path="/create-list" element={<CreateListing />} />
     </Route>
     <Route path="/edit-list" element={<PrivateRoute/>}>
     <Route path="/edit-list/:id" element={<EditListing />} />
     </Route>

      
      <Route path="/offers" element={<Offers />} />
      <Route path="/category/:category/:id" element={<Listing />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
    
    </Routes>

  <Footer/>
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
