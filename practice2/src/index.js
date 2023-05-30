import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// viedo 9  (on off light)
class Toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            isToggleOn: false
        }
    }
   toggleBtn()
 {
    console.log('button is clicked');
    this.setState({isToggleOn : ! this.state.isToggleOn});
}
render()
    {
   return (
    <>


<div className={`tubelightoff ${this.state.isToggleOn ? 'tubelightOn' :'tubelightOff'}`}></div>


<button className= {`onOffBtn ${this.state.isToggleOn ? 'onBtn' : 'offBtn'}`} onClick={ () => this.toggleBtn()} > {this.state.isToggleOn ? 'NO' : 'OFF'}




     </button>
    </>
 );


  }
}
ReactDOM.render(
    <Toggle />,
document.getElementById('root')
);
