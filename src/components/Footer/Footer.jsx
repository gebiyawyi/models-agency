import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              Models<span>Agency</span>
            </h3>
            <p>
              Premier modeling agency connecting talent with opportunity
              worldwide.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="Facebook">
                👍
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="LinkedIn">
                🔗
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#models">Models</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Model Management</a>
              </li>
              <li>
                <a href="#">Booking Agency</a>
              </li>
              <li>
                <a href="#">Talent Scouting</a>
              </li>
              <li>
                <a href="#">Campaign Planning</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest models and news</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Models Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
