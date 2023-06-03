import React from 'react';
import Calculatorinput from './Calculatorinput';
import Result from './Result';

class Calculator extends React.Component{
    constructor(props)
    {
        super(props); 
        this.state = {
            distance : '',
            unit : ''
        }
        this.meterChange = this.meterChange.bind(this);
        this.kmChange = this.kmChange.bind(this);
        
    }

meterChange(distance){
this.setState({distance , unit :'Meter'})
    }

kmChange(distance){
    this.setState({distance ,unit :'kiloMeter'})
}

    render() {
        let meterValue,kmValue;
        if(this.state.unit ==='Meter')
        {
            meterValue = this.state.distance;
            kmValue= meterValue /1000 ;
        }
        if(this.state.unit ==='KiloMeter')
        {
            kmValue = this.state.distance;
            meterValue= kmValue * 1000 ;
        }
        return(
            <>
            < Calculatorinput unit ="Meter" distance={meterValue} distanceChgFunc={this.meterChange}/>

            < Calculatorinput unit ="kiloMeter" distance={kmValue} distanceChgFunc={this.kmChange}/>
                                               {/*         |
                                                    {this.state.distance}       */}

            <Result distance = {meterValue} />           
            </>
        )
    }
}
export default Calculator;