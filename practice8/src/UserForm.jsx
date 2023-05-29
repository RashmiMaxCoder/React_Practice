import React from 'react';

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            // by initilization
            // nameValue : 'family',
            // emailValue : 'family@gmail.com'
            
             nameValue : '',
            emailValue : ''
        }
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
 
    nameChange(event){
        this.setState({nameValue : event.target.value});
    }
    emailChange(event){
        this.setState({emailValue : event.target.value});
    }
    formSubmit(){
        alert('Form Submittes Successfully with Name :' + this.state.nameValue + ' and email :' + this.state.emailValue)
    }
  render(){
    return(
      <form style ={{ maxWidth:`200px`, padding :`40px`, background:`#eee`, margin: `50px auto`}} onSubmit ={this.formSubmit}>
        <label>Name : <input type="text" value= {this.state.nameValue} onChange ={this.nameChange}/></label><br/><br/>
        <label> Email : <input type= "email" value={this.state.emailValue} onChange ={this.emailChange}/></label><br/><br/>
        <button type= "submit">Submit</button>
      </form>
    )
  }
}
export default UserForm;