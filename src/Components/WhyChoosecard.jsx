import React from "react";

const WhyChooseCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon-box">
        {icon}
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
};

export default WhyChooseCard;