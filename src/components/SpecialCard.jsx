import React from "react";
import "./style/SpecialCard.css";

function SpecialCard({title, description, image, Price}) {
    return (
        <div className="special-card">
            <img src={image} alt={title}/>

            <div className={"special-card-content"}>
                <div className={"Name-Price-cover"}>
                    <h2 className={"Title"}>{title}</h2>
                    <h3> {Price}</h3>
                </div>
                <p>{description}</p>
                <div className={"order-section"}>
                <h2> oder this item</h2>
                <button> +</button>
                    </div>
            </div>
        </div>
    );
}

export default SpecialCard;