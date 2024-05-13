// src/components/TestimonialCard.jsx

import React from "react";
import "./style/TestimonialCard.css";

function TestimonialCard({name, image, rating, review}) {
    return (
        <div className="testimonial_card">
            <div className="testimonial_card_image">
                <img src={image} alt="testimonial" />
                <div className="testimonial_card_rating">{rating}</div>
            </div>
            <div className="testimonial_card_content">
                <p>{review}</p>
                <h2>{name}</h2>
            </div>
        </div>
    );
}
export default TestimonialCard;