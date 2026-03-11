import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? "mobile-active" : ""}`}>
      <div className="navbar-logo">
        <div className="logo-icon">UC</div>
        <div className="logo-text">
          <span className="brand-name">UrbanCrew</span>
          <span className="brand-tagline">Smart Workforce Services</span>
        </div>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className="navbar-links">
        <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
        <li><a href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>Client Solutions</a></li>
        <li><a href="#workers" onClick={() => setIsMobileMenuOpen(false)}>For Workers</a></li>
        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Why UrbanCrew</a></li>
        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
      </ul>

      <button className="navbar-btn">
        <FaPhoneAlt className="btn-icon" /> Request Staff
      </button>
    </nav>
  );
};

export default Navbar;
