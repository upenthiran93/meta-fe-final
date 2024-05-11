import Nav from "./Nav";
import logo from "../assets/icons/Logo.png";
import './Header.css';

import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>


          <Nav />

      </div>
    </>
  );
}

export default Header;
