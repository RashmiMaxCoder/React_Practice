// without using hooks  viedo 29
// import React from 'react';

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count :0
//         }
//         this.incFunc = this.incFunc.bind(this);
//     }
//     incFunc(){
//         this.setState({count : this.state.count +1})
//     }
//     render(){
//         return(
//             <>
//             <p> Count No. {this.state.count}</p>
//             <button onClick={this.incFunc}> Increament </button>
//             </>
//             )
//     }
// }
// export default App;


//using hooks
import React,{useState} from 'react';

function App(){
    const [count, setCount] = useState(0);
    return(
        <>
        <p> Count No. {count}</p>
        <button onClick={() => setCount(count + 1)}> Increament </button>
        </>
        )
}
export default App;