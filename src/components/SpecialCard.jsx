import React from "react";
import "./style/SpecialCard.css";
function SpecialCard({ title, description, image, Price}) {
  return (
    <div className="special-card">
      <img src={image} alt={title} />
        <div className={"content"}>
            <h2 className={"Title"}>{title}</h2>
            <h3> {Price}</h3>
             <p>{description}</p>
            <h2> oder this item</h2>
            <button> oder noww</button>
        </div>
    </div>
  );
}
export default SpecialCard;