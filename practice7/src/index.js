import React from 'react';
import ReactDOM from 'react-dom';


//Lists and Keys in React.js | Use Map method with JSON Data Array in React Js in
//viedo 13

// //1. single array
// //const listitems=['saurav','anjali']
// const listitems=[1,2,2,3,4,5]
// function List(){
//     return(
//         <ul>
//             {
//                 listitems.map((item,index) =>
//                 <li key = {index}>{item} and its value is {index}</li>
//                 )
//             }
//         </ul>
//     )
// }

// ReactDOM.render(

//     <List />,
//     document.getElementById('root')
// )

//2. Multiple data
import Teamdata from './Teamdata';

function List(){
    return(
        <>
            {
                Teamdata.map((team,index) =>
                <div key = {team.id} style={{marginTop : `40px`}}>
                <span> ID = {team.id}</span><br></br>
                <span> Name = {team.name}</span><br></br>
                <span> Email = {team.email}</span>
                </div>
                )
            }
        </>
    )
}

ReactDOM.render(

    <List />,
    document.getElementById('root')
)