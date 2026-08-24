import React, { useState } from "react";
import { testimonials } from "../../data/models";
import "./Testimonials.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>Real feedback from real partners</p>
        </div>
        <div className="testimonials-slider">
          <button className="testimonial-btn prev" onClick={prevTestimonial}>
            ‹
          </button>
          <div className="testimonial-card">
            {/* Client Photo - Circle */}
            <div className="testimonial-avatar">
              <img
                src={testimonials[currentIndex].photo}
                alt={testimonials[currentIndex].name}
              />
            </div>

            <div className="testimonial-rating">
              {"★".repeat(testimonials[currentIndex].rating)}
              {"☆".repeat(5 - testimonials[currentIndex].rating)}
            </div>
            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].name}</h4>
              <span>{testimonials[currentIndex].role}</span>
            </div>
          </div>
          <button className="testimonial-btn next" onClick={nextTestimonial}>
            ›
          </button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
