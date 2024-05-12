import { Link } from 'react-router-dom';
import Nav from "./Nav";
import React from "react";
import "./style/Footer.css";

function Footer() {
    return (
        <footer>
            <div className={"Footer-img"}>
                <img  src="https://via.placeholder.com/400" alt="about"/>
            </div>
            <Nav/>
            <div className={"Footer-soc"}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <p>© 2022 Little Lemon</p>
        </footer>
    );
}
export default Footer;