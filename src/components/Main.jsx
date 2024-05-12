import React from 'react';
import './style/Main.css';
import Hero from "./Hero";
import Highlights from "./Highlights";
function Main() {
    return (
        <main className={"Main"}>
           <Hero/>
            <Highlights/>
        </main>
    );
}
export default Main;