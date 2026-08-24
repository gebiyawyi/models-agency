import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-badge">About Us</span>
            <h2>Leading Models Agency Since 2010</h2>
            <p>
              We are a premier modeling agency dedicated to discovering and
              representing the most talented models from around the world. With
              over a decade of experience, we've built a reputation for
              excellence, professionalism, and diversity.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">✦</span>
                <div>
                  <h4>Professional Management</h4>
                  <p>Dedicated agents for every model</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">✦</span>
                <div>
                  <h4>Global Network</h4>
                  <p>Connections worldwide</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">✦</span>
                <div>
                  <h4>Diverse Talent</h4>
                  <p>Models from all backgrounds</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">✦</span>
                <div>
                  <h4>Industry Expertise</h4>
                  <p>Years of fashion experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/about-image.jpg" alt="About us" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
