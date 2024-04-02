import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import Offers from './pages/Offers';


function App() {
  return (
   <>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    "
    </Routes>


  </Router>
  


   </>
  );
}

export default App;
