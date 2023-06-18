import React from 'react';
import { useEffect,useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'

export default function App(){
    const [time,setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() =>{
            setTime(new Date())
        },1000)
    })

return(
    <div style={{ backgroundColor :'greenyellow',display:'inline-block',top:'50%',left:'50%',
                    transform:'translate(-50%,-50%)',position:'absolute',padding:'12vh',}}>
        {/* <h1> React clock </h1> */}
        {/* <Clock value={time} /> */}
        <h1>(*_*)Rashmi Bharti(*_*)</h1>
         <Clock value={time} size={300} renderNumbers ={true} /> 
    </div>
    )
}
