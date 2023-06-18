// using component viedo 30
// import React from 'react';

// class App extends React.Component {
//     constructor(props){
//     super(props)
//     this.state = {
//         clicks : 0
//     }
//     this.btnClick = this.btnClick.bind(this);
//     }
//     btnClick(){
//         this.setState({clicks : this.state.clicks + 1})
//     }
//     componentDidMount(){
//         document.title = ` componentDidMount function is working now ${this.state.clicks} times`;
//     }
//     componentDidUpdate(){
//         document.title = ` componentDidUpdate function is working now ${this.state.clicks} times`;
//     }

//     render(){
//         return(
//             <>
//             <p>You hvave {this.state.clicks} clicks</p>
//             <button onClick={this.btnClick}>Click Me</button>
//             </>
            
//             )
//     }
// }
// export default App;

//use effect hooks
import React ,{useEffect,useState} from 'react';

function App(){
    const [clicks, setClicks] = useState(0);
    //here we need to use  custom effect hook because once we use here effect hook then we 
    //need to write whole part of the this in all the file , if we to have  more then one line 
    // in this part this will be lengthy code . so weneed to make sepreate hook i.e custom hook (in next prctice).
    useEffect(() =>{
        document.title = ` useEffect function is working now ${clicks} times`;
    });
    return(
        <>
         <p>You have {clicks} clicks</p>
        <button onClick={() => setClicks(clicks+1)}>Click Me</button>
        </>
        )
}

export default App;