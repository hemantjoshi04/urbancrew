import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon">UC</div>
        <div className="logo-text">
          <span className="brand-name">UrbanCrew</span>
          <span className="brand-tagline">Smart Workforce Services</span>
        </div>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#solutions">Client Solutions</a></li>
        <li><a href="#workers">For Workers</a></li>
        <li><a href="#about">Why UrbanCrew</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <button className="navbar-btn">
        <FaPhoneAlt className="btn-icon" /> Request Staff
      </button>
    </nav>
  );
};

export default Navbar;
