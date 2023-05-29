import React from 'react';

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
             nameValue : '',
            emailValue : '',
            idValue : ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    inputChange(event){
      //console.log(event);
      this.setState({[event.target.name] : event.target.value});

  }

    formSubmit(event){
        alert('Form Submittes Successfully with Name :' + this.state.nameValue + ' and email :' + this.state.emailValue + 'and employee id is' + this.state.idValue);
        event.preventDefault();

    }
  
  render(){
    return(
      <form style ={{ maxWidth:`200px`, padding :`40px`, background:`#eee`, margin: `50px auto`}} onSubmit ={this.formSubmit}>
        <label>Name : <input type="text" name="nameValue" value= {this.state.nameValue} onChange ={this.inputChange}/></label><br/><br/>
        <label> Email : <input type= "email" name="emailValue" value={this.state.emailValue} onChange ={this.inputChange}/></label><br/><br/>
        <label> Employee Id : <input type= "number" name="idValue" value={this.state.idValue} onChange ={this.inputChange}/></label><br/><br/>

        
        <button type= "submit">Submit</button>
      </form>
    )
  }
}
export default UserForm;