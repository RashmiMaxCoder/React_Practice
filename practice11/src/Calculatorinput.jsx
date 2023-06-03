import React from 'react';

class Calculatorinput extends React.Component{
    constructor(props)
    {
        super(props); 
        this.inputChg = this.inputChg.bind(this);
    }
inputChg(event){
    this.props.distanceChgFunc(event.target.value)
}
    render(){
        return(
            <>
            <label>Enter Distance in {this.props.unit}: <input type="number" value={this.props.distance} onChange ={this.inputChg}/> </label><br></br>
            {/* no need to write below line bcz in js file we have taken 2 times <Calculateinput /> */}
           {/* <label>Enter Distance in KiloMeter : <input type="number" value={this.props./(state).distance} onChange ={this.inputChg}/></label><br></br> */}
            </>
        )
        }
}

export default Calculatorinput;