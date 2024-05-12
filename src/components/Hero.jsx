import React from "react";
import heroimage from "../assets/images/restaurantFood.jpg";

function Hero() {
  return (
    <div className="hero">
     <div className={"hero-info"}>
         <h1>Little Lemon</h1>

         <p>Choose your favorite meal from our broadhoose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
         <button className={"Hero-Action"}>Order Now</button>
     </div>
        <div className={"hero-img"}>
            <img src={heroimage} alt="heroimage" />
        </div>
    </div>
  );
}
export default Hero;