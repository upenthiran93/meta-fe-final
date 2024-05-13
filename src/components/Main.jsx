import React from 'react';
import './style/Main.css';
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";
import About from "./About";
function Main() {

    return (
        <main className={"Main"}>
           <Hero/>
            <Highlights/>
            <Testimonial />
            <About/>
        </main>
    );
}
export default Main;