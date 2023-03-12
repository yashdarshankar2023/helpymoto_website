// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from "./components/Home";
import Loginuser from './components/login';
import Signupuser from './components/signup_user';
import Loginmechanic from './components/login_mechanic';
import Logindriver from './components/login_driver';
import Passwordreset from './components/password_reset';
import Registermechanic from './components/register_mechanic';
import Registerdriver from './components/register_driver';
import About from "./components/about"
import Contact from "./components/contact"
import Service from "./components/service"
import Hire from "./components/hire"

import { BrowserRouter, Routes, Route } from "react-router-dom";






export default function Index() {
  
  return (
    <BrowserRouter>
      
      <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/loginuser" element={<Loginuser />} />
          <Route path="/signupuser" element={<Signupuser />} />
          <Route path="/loginmechanic" element={<Loginmechanic />} />
          <Route path="/logindriver" element={<Logindriver />} />
          <Route path="/passwordreset" element={<Passwordreset />} />
          <Route path="/registermechanic" element={<Registermechanic />} />
          <Route path="/registerdriver" element={<Registerdriver />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/hire" element={<Hire />} />
          
          
          
          
          
          
          
          
          

          
   
          
          
          
      </Routes>
      
    </BrowserRouter>
      
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
