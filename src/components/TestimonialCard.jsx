import React from "react";
import "./style/TestimonialCard.css";
import image from "../assets/images/profile1.jpg";

function TestimonialCard() {
  return (
    <div className="testimonial_card">
      <div className="testimonial_card_image">
        <img src={image} alt="testimonial" />
      </div>
      <div className="testimonial_card_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <h2>John Doe</h2>
      </div>
    </div>
  );
}
export default TestimonialCard;