import SpecialCard from "./SpecialCard";
import image from "../assets/images/restaurant.jpg";
import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonial () {
  return (
    <div className="testimonial">
      <div className="testimonial_Title">
       <h1>
           Testimonial
       </h1>
      </div>
        <div className="testimonial_cards">

            {[...Array(3)].map((_, index) => (
                <TestimonialCard
                    key={index}

                />

            ))}

        </div>
    </div>
  );
}
export default Testimonial;