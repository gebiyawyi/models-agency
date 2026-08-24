import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-text">
          <span className="hero-badge">Premium Models Agency</span>
          <h1>
            Where <span>Beauty</span> Meets
            <br />
            <span>Professionalism</span>
          </h1>
          <p>
            Discover the most talented and diverse models for your next
            campaign, runway show, or creative project.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">View Models</button>
            <button className="btn-secondary">Book Now</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>200+</h3>
            <p>Models</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
