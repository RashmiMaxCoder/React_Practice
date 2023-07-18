import React from 'react';

function App() {

  return( 
    <div style={{padding :`50px`}}>
      <h1>Environment Variable Example</h1>
      <p> My Name is {process.env.REACT_APP_MY_NAME}</p>
      <p>If we use Environment Variable i.e. rashmi or process.env.REACT_APP_MY_NAME , we need to restart the server </p>
    </div>
  );
}
export default App;