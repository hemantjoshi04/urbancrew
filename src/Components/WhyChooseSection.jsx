import React from "react";
import WhyChooseCard from "./WhyChoosecard";
import { FaUserCheck, FaBalanceScale, FaUndo, FaMapMarkerAlt } from "react-icons/fa";

const WhyChooseSection = () => {
    return (
        <section id="about" className="why-section">
            <button className="badge">Why Choose UrbanCrew</button>

            <h1 className="main-heading">Operational peace of mind</h1>

            <p className="subtitle">
                Reliable staff, clear pricing, and a dedicated manager ensuring every shift runs smoothly.
            </p>

            <div className="card-container">
                <WhyChooseCard
                    icon={<FaUserCheck />}
                    title="Verified Workers"
                    description="Government ID checks and onboarding by UrbanCrew."
                />

                <WhyChooseCard
                    icon={<FaBalanceScale />}
                    title="Affordable Services"
                    description="Transparent pricing, no hidden surprises."
                />

                <WhyChooseCard
                    icon={<FaUndo />}
                    title="Replacement Support"
                    description="Never stay short-staffed with quick swap-outs."
                />

                <WhyChooseCard
                    icon={<FaMapMarkerAlt />}
                    title="Local Workforce"
                    description="Supporting community employment and faster response."
                />
            </div>
        </section>
    );
};

export default WhyChooseSection;
