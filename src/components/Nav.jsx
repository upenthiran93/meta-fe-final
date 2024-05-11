import React from 'react';
import './Nav.css';
function Nav() {
    return (
      <nav className='nav' >
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#home">Reservation</a></li>
          <li><a href="#contact">Order online</a></li>
          <li><a href="#contact">Login</a></li>
        </ul>
      </nav>
    );
}
export default Nav;