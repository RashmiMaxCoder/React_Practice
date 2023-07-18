import React from 'react';
import { MyContext, themes } from './MyContext';
import ThemeContent from './ThemeContent';


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            theme :themes.light
        }
        this.changeTheme = this.changeTheme.bind(this);
    }
   
    changeTheme(){
        this.setState({
            theme :this.state.theme === themes.dark ? themes.light :themes.dark
        })

    }
 render(){

    return(
        <MyContext.Provider value={this.state.theme}>
              <ThemeContent changeTheme={this.changeTheme}/>
        </MyContext.Provider>
  
    )
 }

}