import React from 'react';
import './style/Main.css';
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";
function Main() {
    return (
        <main className={"Main"}>
           <Hero/>
            <Highlights/>
            <Testimonial/>
        </main>
    );
}
export default Main;