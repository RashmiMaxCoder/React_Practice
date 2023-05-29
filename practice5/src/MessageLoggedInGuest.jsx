import React from 'react';

function MessageLoggedInGuest(props)
{
  return (
    <>
    <h1>Please Login first</h1>
    
    <button onClick={props.buttonClickFunc}>Login</button>
    </>
  )
}

  export default MessageLoggedInGuest;