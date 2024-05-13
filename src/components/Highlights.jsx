import React from 'react';
import './style/Highlights.css';
import SpecialCard from "./SpecialCard";

import specialData from "../API/SpecialCardData"
function Highlights () {

  return (
    <div className={"Highlights"}>
        <div className={"TitleBox"}>
            <h1>Highlights</h1>
            <button> oder now</button>
        </div>
       < div className={"HighlightsBox"}>
           {specialData.map((item, index) => (
               <SpecialCard
                   key={index}
                   description={item.description}
                   title={item.title}
                   image={item.image}
                   Price={item.price}
               />
           ))}
       </div>
//test


    </div>
  )
}
export default Highlights;