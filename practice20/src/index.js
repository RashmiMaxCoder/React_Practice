import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Routes, useNavigate  } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import Error from './Error';
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
    <Navbar></Navbar>
       <Routes> 
          {/* Switch -> routes */}
          <Route exact path="/" Component ={Home}/>
          <Route exact path="/about" Component ={About}/>
          <Route exact path="/contact" Component ={Contact}/>
          {/* <Route path="*" Component = {Error} /> */}
          {/* if we dont want error page we can use redirect page */}
          <Route path="*" element={() => navigate('/about')} />

           {/* by chatGPT 
           <Route path="/home" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
