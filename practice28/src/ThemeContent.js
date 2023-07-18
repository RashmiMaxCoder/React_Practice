import React from 'react';
import {MyContext, themes} from './MyContext';

export default class ThemeContent extends React.Component{
    render(){
        let theme= this.context;

       return(
        <div style={{padding: '40px', backgroundColor : theme.backgroundColor ,color : theme.color}} >
        <h1> Main Heading</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur
         adipisicing elit. Minima neque aspernatur,
          architecto quasi quo in quam facere dolorem
           ipsam sunt, voluptate voluptatem veniam vel 
           itaque nobis. Porro pariatur harum facere?
           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Minima neque aspernatur, architecto quasi quo in quam facere
             dolorem ipsam sunt, voluptate voluptatem veniam vel itaque nobis.
              Porro pariatur harum facere.
        </p>
        <button onClick={this.props.changeTheme}>Click Button</button>

    </div>
        
        )
    }
}
ThemeContent.contextType = MyContext;