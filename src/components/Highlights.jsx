import React from 'react';
import './style/Highlights.css';
import SpecialCard from "./SpecialCard";
import image from "../assets/images/restaurant.jpg";
function Highlights () {
  return (
    <div className={"Highlights"}>
        <div className={"TitleBox"}>
            <h1>Highlights</h1>
            <button> oder noww</button>
        </div>
       < div className={"HighlightsBox"}>
           {[...Array(3)].map((_, index) => (
              <SpecialCard
                  key={index}
                  description={" and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"}
                    title={"Name of the dish"}
                    image={image}
                  Price={"$ 20"}
              />

           ))}
       </div>



    </div>
  )
}
export default Highlights;