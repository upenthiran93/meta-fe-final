import React from 'react';
import './style/Highlights.css';
import SpecialCard from "./SpecialCard";
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
                  description={"test disscriptiopn"}
                    title={"test title"}
                    image={"https://via.placeholder.com/150"}
              />

           ))}
       </div>



    </div>
  )
}
export default Highlights;