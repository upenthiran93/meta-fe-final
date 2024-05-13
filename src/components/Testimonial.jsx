// src/components/Testimonial.jsx

import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialData from "../API/TestimonialCardData";

function Testimonial () {
    return (
        <div className="testimonial">
            <div className="testimonial_Title">
                <h1>
                    Testimonial
                </h1>
            </div>
            <div className="testimonial_cards">
                {testimonialData.map((data, index) => (
                    <TestimonialCard
                        key={index}
                        name={data.name}
                        image={data.image}
                        testimonial={data.testimonial}
                        rating={data.rating}
                        review={data.review}
                    />
                ))}
            </div>
        </div>
    );
}
export default Testimonial;