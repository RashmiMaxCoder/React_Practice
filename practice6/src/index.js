import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Routes,Link } from 'react-router-dom'

import Home from "./Home";
import Message from "./Message";

//viedo 12
//Routing in React.js | Use Routes in React | react-router-dom

ReactDOM.render(
  <BrowserRouter>
      <div style = {{textAlign : `center`, padding :`10px 0`,margin :`0 auto`, maxWidth : `1000px`,
      backgroundColor :`#ccc`, overflow:`hidden`}}> 
      <div style = {{width : `30%`, float:`left`}}><h1>Logo</h1></div>
      <div style = {{width : `70%`, float :`left`, paddingTop :`30px`}}>
      <Link to = "/home">Home Page</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to  = "/login">Login Page</Link>
      </div>
      </div>
      <div style = {{textAlign : `center`}}>
        <Routes> 
          {/* Switch -> routes */}
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/login" element={<Message/>}/>
        </Routes>
        </div>
    </BrowserRouter>
    // <>
    //   <BrowserRouter>
    //     <Switch>
    //       <Route exact path="/home" component={Home} />
    //       <Route exact path="/login" component={Message}/>

    //     </Switch>
    //   </BrowserRouter>
    // </>,
    ,
  document.getElementById('root')
);
