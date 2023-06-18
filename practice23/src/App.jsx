// import {add,sub,mul} from './Math';
// function App() {
//     console.log(add(10,5));
//     console.log(sub(10,5));
//     console.log(add(10,5) + " and "+ sub(10,5));
//     return(
//         <p>Hey Welcome </p>
//         )
// }
// export default App;

//by code splitting method 
// 1) import()
// 2) React.lazy()
//  this will show when lots of content are coming it comes for a sec after then
// it disapear and contents will displayed
// <Suspense fallback={<h1 style={{color :`red`}}>Content is coming soon</h1>}>
  

import React,{Suspense} from 'react';
//import Content from './Content';


const Content= React.lazy(()=> import('./Content'));

class App extends React.Component{
    render(){  
        // import('./Math').then(Math => {
        //     console.log(Math.add(10,5) + " and "+ Math.sub(10,5) + " and "+ Math.mul(10,5)); 
        // })
        return(
            <>
            <p>Hey welcome to code splitting Import Method</p>
            <Suspense fallback={<h1 style={{color :`red`}}>Content is coming soon</h1>}>
          <Content />
          </Suspense>
            </>
        )
    }
}
 export default App;