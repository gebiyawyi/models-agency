import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <a href="#hero" className="logo-link">
            <span className="logo-icon">✦</span>
            <span className="logo-text">
              Models<span className="logo-highlight">Agency</span>
            </span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-links">
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
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
