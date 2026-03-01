import React from "react";
import "./ClientSolutions.css";
import { FaBook, FaSchool, FaBriefcase, FaHospital, FaBuilding, FaGraduationCap, FaClipboardCheck, FaTshirt, FaChartLine, FaBolt, FaCalendarAlt } from "react-icons/fa";

const ClientSolutions = () => {
    return (
        <section id="solutions" className="solutions-section">
            <div className="solutions-header">
                <button className="badge solutions-badge">
                    <FaBook className="badge-icon" /> Client Solutions
                </button>
                <h2 className="solutions-title">Built for facilities that run non-stop</h2>
                <p className="solutions-subtitle">
                    UrbanCrew takes care of hiring, attendance, salaries, uniforms, and rapid replacements.
                </p>
            </div>

            <div className="solutions-grid">
                {/* Left Card: We serve */}
                <div className="solutions-card we-serve-card">
                    <h3 className="card-heading">We serve</h3>
                    <ul className="solutions-list">
                        <li className="list-item">
                            <FaSchool className="list-icon" /> Private & Government Schools
                        </li>
                        <li className="list-item">
                            <FaBriefcase className="list-icon" /> Offices and Corporate Buildings
                        </li>
                        <li className="list-item">
                            <FaHospital className="list-icon" /> Hospitals & Clinics
                        </li>
                        <li className="list-item">
                            <FaBuilding className="list-icon" /> Housing Societies
                        </li>
                        <li className="list-item">
                            <FaGraduationCap className="list-icon" /> Coaching Institutes
                        </li>
                    </ul>
                </div>

                {/* Right Card: Benefits for you */}
                <div className="solutions-card benefits-card">
                    <h3 className="card-heading">Benefits for you</h3>
                    <ul className="solutions-list">
                        <li className="list-item">
                            <FaClipboardCheck className="list-icon" /> UrbanCrew handles hiring, attendance, salaries
                        </li>
                        <li className="list-item">
                            <FaTshirt className="list-icon" /> Workers in proper uniform & ID
                        </li>
                        <li className="list-item">
                            <FaChartLine className="list-icon" /> Regular monitoring & performance reporting
                        </li>
                        <li className="list-item">
                            <FaBolt className="list-icon" /> Fast replacement in emergencies
                        </li>
                    </ul>

                    <button className="book-meeting-btn">
                        <FaCalendarAlt className="btn-icon" /> Book a Meeting
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClientSolutions;
