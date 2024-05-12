import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './style/Nav.css';

function Nav() {
    return (

        <nav className='nav'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/order">Order online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

    );
}

export default Nav;