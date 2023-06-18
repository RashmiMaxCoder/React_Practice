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

import React from 'react';
class App extends React.Component{
    render(){  
        import('./Math').then(Math => {
            console.log(Math.add(10,5) + " and "+ Math.sub(10,5) + " and "+ Math.mul(10,5)); 
        })
        return(
            <p>Hey welcome to code splitting Import Method</p>
        )
    }
}
 export default App;