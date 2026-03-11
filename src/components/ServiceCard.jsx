import React from 'react';

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="card">
      <div className="icon">
        <i className={`fa-solid ${icon}`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
  type="button"
  className="btn secondary"
  onClick={() =>
    window.open(
      "https://wa.me/919306512657?text=Hi%20UrbanCrew%20Team,%20I%20want%20to%20hire%20now!",
      "_blank"
    )
  }
>
  <i className="fa-brands fa-whatsapp"></i> Hire Now
</button>

    </div>
  );
}

