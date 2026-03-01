import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="contact" className="footer-section">
            <div className="footer-container">

                <div className="footer-left">
                    <div className="footer-logo">
                        <div className="footer-logo-icon">UC</div>
                        <div className="footer-logo-text">
                            <span className="footer-brand-name">UrbanCrew</span>
                            <span className="footer-brand-tagline">Smart Workforce Services</span>
                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <p className="footer-description">
                        UrbanCrew provides reliable manpower & staffing solutions including helpers, cleaners, MTS staff,
                        and support workers for schools, offices, hospitals, and societies. We manage attendance, salaries,
                        and staff performance to ensure smooth operations and trusted service.
                    </p>
                    <div className="footer-links">
                        <a href="#">WhatsApp</a><span> • </span>
                        <a href="#">Instagram</a><span> • </span>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-social-icons">
                        <a href="#" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                    <p className="footer-copyright">Copyright © UrbanCrew 2025</p>
                    <p className="footer-creator">Ksp Harsh</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
