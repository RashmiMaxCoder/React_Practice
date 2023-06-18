// //use effect hooks
// import React ,{useEffect,useState} from 'react';

// function App(){
//     const [clicks, setClicks] = useState(0);
//     // here we need to use  custom effect hook because once we use here effect hook then we 
//     //need to write whole part of the this in all the file , if we to have  more then one line 
//     // in this part this will be lengthy code . so weneed to make sepreate hook.
//     useEffect(() =>{
//         document.title = ` useEffect function is working now ${clicks} times`;
//     });
//     return(
//         <>
//          <p>You have {clicks} clicks</p>
//         <button onClick={() => setClicks(clicks+1)}>Click Me</button>
//         </>
//         )
// }
// export default App;

import React ,{useState} from 'react';
import useClicks from './useClicks';

function App(){
        const [clicks, setClicks] = useState(0);
        useClicks(clicks);
        return(
                    <>
                     <p>You have {clicks} clicks</p>
                    <button onClick={() => setClicks(clicks+1)}>Click Me</button>
                    </>
              )
            }
export default App;