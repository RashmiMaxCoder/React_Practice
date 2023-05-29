import React from 'react';
import MessageLoggedInGuest from './MessageLoggedInGuest';
import MessageLoggedInAdmin from './MessageLoggedInAdmin'; 

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

  export default Message;