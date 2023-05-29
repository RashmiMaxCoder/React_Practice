import React from 'react';
import ReactDOM from 'react-dom';

// 1 to 8 React js stubborn Developer
//1
// ReactDOM.render(
//     <h1>Welcome Rashmi</h1>,
//     document.getElementById('root')
// )

//2
// const htmlTag = 'Welcome !!!! Rashmi'
// const htmlTag = <h1> Welcome !!!! Rashmi</h1> //jsx
// ReactDOM.render(
// htmlTag,
// document.getElementById('root')
// )

//3
// const message={
//     first_word : 'Welcome',
//     second_word : 'Rashmi'
// }

// const htmlTag = <h1> Hello everyone {message.first_word} {message.second_word}</h1>

//  ReactDOM.render(
//     htmlTag,
//     document.getElementById('root')
//  )

//4
    // function concat_message(message)
    // {
    //     return message.first_word + ' ' + message.second_word ;
    // }
     
    // const message = {
    //     first_word : 'Welcome',
    //     second_word : 'Rashmi'
    // }
    
    // const htmlTag = <h1> Hello everyone {concat_message(message)}</h1>
    
    //  ReactDOM.render(
    //     htmlTag,
    //     document.getElementById('root')
    //  )

    //5
    // const element = <h1>Hello friends , It is {new Date().toLocaleTimeString()}</h1>
    // ReactDOM.render(
    //     element ,
    //     document.getElementById('root')
    // )

    //6
    // function clock()
    // {
    //     const element = <h1>Hello friends , It is {new Date().toLocaleTimeString()}</h1>
    
    // ReactDOM.render(
    //     element ,
    //     document.getElementById('root')
    // )
    // }
    // // setInterval(clock,1000);
    // setInterval(clock,5000);

    //7 react fragment
    //     ReactDOM.render(
    //     <div>
    //         <h2>hello</h2>
    //         <h1>hey</h1>
    //     </div>,
    //     document.getElementById('root')
    // )
    
    //8
    //   ReactDOM.render(
    //     <React.Fragment>
    //         <h2>hello</h2>
    //         <h1>hey</h1>
    //         <h3>Welcome</h3>
    //     </React.Fragment>,
    //     document.getElementById('root')
    // )
    //                or
    // ReactDOM.render(
    //         <>
    //             <h2>hello</h2>
    //             <h1>hey</h1>
    //             <h3>Welcome</h3>
    //         </>,
    //         document.getElementById('root')
    //     )

    //9 Function Components ---------
    // function Welcome()
    // {
    //     return (<h1> Welcome to Rashmi react practice</h1>)
    // }
    // ReactDOM.render(
    //     <Welcome/>,
    //     document.getElementById('root')
    // )

    //      pass input          
    //   function Welcome(props)
    // {
    //     return (<h1> Welcome to {props.name} {props.empcode} react practice</h1>)
    // }
    // ReactDOM.render(
    //     <Welcome name="Rashmi" empcode="11"/>,
    //     document.getElementById('root')
    // )

    //pass multiple input 
    // function Welcome(props)
    // {
    //     return (<h1> Welcome to {props.name} {props.empcode} react practice</h1>)
    // }
    // ReactDOM.render(
    //    <>
    //     <Welcome name="Saurav" empcode="51"/>
    //     <Welcome name="Anjali" empcode="21"/>
    //     <Welcome name="Rashmi" empcode="11"/>
    //    </>,
    //     document.getElementById('root')
    // )


  // 10 class component-------------
    // class Welcome extends React.Component{
    //     render()
    //     {
    //         return (<h1> Welcome to {this.props.name} {this.props.empcode} react practice</h1>) 
    //     }
    // }
    // ReactDOM.render(
    //    <>
    //     <Welcome name="Saurav" empcode="51"/>
    //     <Welcome name="Anjali" empcode="21"/>
    //     <Welcome name="Rashmi" empcode="11"/>
    //    </>,
    //     document.getElementById('root')
    // )

    // 11 state and life cycle
    //function component
    // function StateLifeCycle(props)
    // {
    //     return(<h1>{props.date.toString() }</h1>)
    // }
    // ReactDOM.render(
    //     <StateLifeCycle date={new Date()}/>,
    //     document.getElementById('root')  
    // );

    // class component
//    class StateLifeCycle extends React.Component
//     {
//         render(){
//             return(<h1>{this.props.date.toString() }</h1>)
//         }
//     }
//     ReactDOM.render(
//         <StateLifeCycle date={new Date()}/>,
//         document.getElementById('root')  
//     );

//12 state and control

// class StateLifecycle extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             date : new Date()
//         }
//     }
//     componentDidMount()
//     {
//         this.timerID= setInterval( 
//             () => this.tick(),
//             1000
//         )
//     }
//     componentWillUnmount()
//     {
//         clearInterval(this.timerID);
//     }
//     tick(){
//             this.setState({date : new Date()});
//     //     console.log("before = " + this.state.date);
//     //     this.state.date = new Date();
//     //     console.log("after = " + this.state.date);
//     }
//     render()
//     {
//         return (<h1>{this.state.date.toString()}</h1>)
//     }
// }
// ReactDOM.render(
// <StateLifecycle/>,
// document.getElementById('root')
// );

// 13 function component
// function toggleBtn()
// {
//     console.log('button is clicked');
// } 
// function Toggle()
// {
//     return (<button onClick={toggleBtn}> ON </button>)
// }
// ReactDOM.render(
//     <Toggle />,
// document.getElementById('root')
// );

// 14 class toggle
// function toggleBtn()
// {
//     console.log('button is clicked');
// } 

// class Toggle extends React.Component{
//     render()
//     {
//     return (<button onClick={toggleBtn}> ON </button>)
//     }
// }
// ReactDOM.render(
//     <Toggle />,
// document.getElementById('root')
// );

// 15 class toggle component and state

class Toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={ 
            isToggleOn: true
        }
       //(1change) this.toggleBtn= this.toggleBtn.bind(this);
    }

 // (1 change)toggleBtn()
 //( 2 change)toggleBtn = () =>
   toggleBtn()
 {
    console.log('button is clicked');
    this.setState({isToggleOn : ! this.state.isToggleOn});
} 
render()
    {
   // ( 2 change) return (<button onClick={this.toggleBtn}>{this.state.isToggleOn ? 'NO' : 'OFF'} </button>)
   // using arrow function
   return (<button onClick={ () => this.toggleBtn()}>{this.state.isToggleOn ? 'NO' : 'OFF'} </button>)

    }  
}
ReactDOM.render(
    <Toggle />,
document.getElementById('root')
);
