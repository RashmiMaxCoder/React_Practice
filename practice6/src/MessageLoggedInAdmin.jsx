import React from 'react';
import Home from './Home';
function MessageLoggedInAdmin(props){
  return (
    <>
    <h1>Your Inbox is here.welcome user </h1>
    <button onClick={props.buttonClickFunc}>Logout</button>
    <Home />
    </>
  )
}

  export default MessageLoggedInAdmin;