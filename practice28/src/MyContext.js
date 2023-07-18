import React from 'react';

export const themes ={
    dark:{
        backgroundColor:'#444',
        color:'#fff'
    },
    light:{
        backgroundColor: '#eee',
        color:'#000'
    }
}
export const MyContext = React.createContext(themes.dark);