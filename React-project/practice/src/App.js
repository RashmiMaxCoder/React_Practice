// 1. practice
// import React from 'react'; 
// // rafce after 17 version no need above line

// // const App = () => {
// //   return (
// //     <div>Hello World , Welcome to rashmi bharti first project</div>
// //   )
// // };
// const App = () => {
//     return (
//         <>
//          <h1 className="myClassName">Hello World {3+3}</h1>
//         <p >Awesome</p>
//         {/* <img src="" alt ="" /> below code will be apply on setting -> jason file then past for hint of code during writing img
//         emmet.includeLanguages": {"javascript": "javascriptreact"} */}
      
//         </>
      
//     )
//   };


// //same but use above fat arrow function

// // function App(){
// //     return ( 
// //     <div>
// //         <h1>Hello World</h1>
// //     </div>
    
// //     )
// // }




// // const App = () => {
// //     return React.createElement("h1",{},"Hello World");
// //   };
// //how react is actuall looking into it
// // const App = () => {
// //     return React.createElement(
// //      "div",
// //      {},
// //     React.createElement("h1",{},"Hello World")
// //     );
// // };

// export default App;


//2. practice
import React from 'react'; 

const App = () => {
    return (
        <>
        <MyName />
        <MyName />
         <h1 className="myClassName">Hello World {3+3}</h1>
        <p >Awesome</p>
        {/* <img src="" alt ="" /> below code will be apply on setting -> jason file then past for hint of code during writing img
        emmet.includeLanguages": {"javascript": "javascriptreact"} */}
      
        </>
      
    )
  };

const MyName = () => {

  return <h1>Rashmi Bharti</h1>
};


export default App;