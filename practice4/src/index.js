import React from 'react';
import ReactDOM from 'react-dom';

//1. 
// function MessageLoggedInAdmin(param){
//   return (<h1>your Inbox is here</h1>)
// }
// function MessageLoggedInGuest()
// {
//   return (<h1>Please Login First</h1>)
// }
// function Message(props)
// {
//   if(props.isLoggedIn)
//   {
//     return <MessageLoggedInAdmin/>
//   }
//   else{
//     return <MessageLoggedInGuest/>
//   }
// }
// ReactDOM.render(
// //<Message isLoggedIn={true}/>
// <Message isLoggedIn={false}/>,
// document.getElementById('root')
// )

// 2. using function component
// function MessageLoggedInAdmin(param){
//   return (
//     <>
//     <h1>Your Inbox is here</h1>
//     <button>Logout</button>
//     </>
//   )
// }
// function MessageLoggedInGuest()
// {
//   return (
//     <>
//     <h1>Please Login first</h1>
//     <button>Login</button>
//     </>
//   )
// }
// function Message(props)
// {
//   if(props.isLoggedIn)
//   {
//     return <MessageLoggedInAdmin/>
//   }
//   else{
//     return <MessageLoggedInGuest/>
//   }
// }
// ReactDOM.render(
// //<Message isLoggedIn={true}/>
// <Message isLoggedIn={false}/>,
// document.getElementById('root')
// )

//3. using class component
// function MessageLoggedInAdmin(param){
//   return (
//     <>
//     <h1>Your Inbox is here</h1>
//     <button>Logout</button>
//     </>
//   )
// }
// function MessageLoggedInGuest()
// {
//   return (
//     <>
//     <h1>Please Login first</h1>
//     <button>Login</button>
//     </>
//   )
// }
// //function Message(props)
// class Message extends React.Component{

//   render(){
//       if(this.props.isLoggedIn)
//       {
//         return <MessageLoggedInAdmin/>
//       }
//       else{
//         return <MessageLoggedInGuest/>
//       }
//   }
// }
// ReactDOM.render(
// //<Message isLoggedIn={true}/>
// <Message isLoggedIn={false}/>,
// document.getElementById('root')
// )


//4. managing using state
// function MessageLoggedInAdmin(param){
//   return (
//     <>
//     <h1>Your Inbox is here</h1>
//     <button>Logout</button>
//     </>
//   )
// }
// function MessageLoggedInGuest()
// {
//   return (
//     <>
//     <h1>Please Login first</h1>
//     <button>Login</button>
//     </>
//   )
// }
// //function Message(props)
// class Message extends React.Component{

//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       // isLoggedIn : false
//         isLoggedIn : true
//     }
//   }

//   render(){
//       if(this.props.isLoggedIn)
//       {
//         return <MessageLoggedInAdmin/>
//       }
//       else{
//         return <MessageLoggedInGuest/>
//       }
//   }
// }
// ReactDOM.render(
// //<Message isLoggedIn={true}/>
// <Message/>,
// document.getElementById('root')
// )

// 5. managing state using clicking button
//(buttons are made in function component but called and define in class component )
// function's quality is we can take data using props
//we need to change the value onClick  logoutFunc and loginFunc to props.buttonClickFunc
//program is ready but by clicking login on the browser it will agin show error"setState undefine" means, it's suppose undefine value of this
// we have use this in loggin  and logout function so this belong to loginFunc and LogoutFunc
// so, when we are using "this" outside of component we need to initilize 'this'.
//so we initilize by bind() and wiil not show undefine 
//In render function, 'if(this.props.isLoggedIn)' we use this when are making function component ,but when we are making class component,
// we use 'if(this.state.isLoggedIn)' because in starting we are passing props but now we are using
//'this.state = {' se we need to check this.state .
// code is getting lendhy so need to import component in react js
function MessageLoggedInAdmin(props){
  return (
    <>
    <h1>Your Inbox is here</h1>
    <button onClick={props.buttonClickFunc}>Logout</button>
    </>
  )
}

function MessageLoggedInGuest(props)
{
  return (
    <>
    <h1>Please Login first</h1>
    
    <button onClick={props.buttonClickFunc}>Login</button>
    </>
  )
}
//function Message(props)
class Message extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
       isLoggedIn : false
       //isLoggedIn : true
    }
    this.loginFunc = this.loginFunc.bind(this);
    this.logoutFunc = this.logoutFunc.bind(this);
  }
loginFunc(){
  return(
    this.setState({isLoggedIn : true})
  )
}
logoutFunc(){
  return (
    this.setState({isLoggedIn : false})
  )
}
  render(){
      if(this.state.isLoggedIn)
      {
        return <MessageLoggedInAdmin buttonClickFunc={this.logoutFunc} />
      }
      else{
        return <MessageLoggedInGuest buttonClickFunc={this.loginFunc}/>
      }
  }
}
ReactDOM.render(
//<Message isLoggedIn={true}/>
<Message/>,
document.getElementById('root')
)

//  6.how to import component in react js
// answer in next file
//Nested Components | Create Reusable Component | Import/Export Components in React.js
