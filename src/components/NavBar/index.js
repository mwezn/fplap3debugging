import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {

    const browserHistory =(e)=>{
        console.log(window.history) 
        window.location.href=document.referrer;//Need to get previous url history ???
    }
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/search">Search</NavLink>
            <button onClick={(e)=>browserHistory(e)}>Back</button>
        </nav>
    );
}

export default NavBar;
