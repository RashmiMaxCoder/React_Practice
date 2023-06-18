import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
            <header>
                <NavLink activeClassName="active" to = "/">Home</NavLink>
                <NavLink activeClassName="active" to = "/about">About</NavLink>
                <NavLink activeClassName="active" to = "/contact">Contact</NavLink>
            </header>
        
        );
}

export default Navbar; 