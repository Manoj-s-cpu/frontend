import React from "react";
import "./WhoCanUse.css";

const features = [
  {
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "Iconone.png" // Replace with your icon path
  },
  {
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "Icontwo.png"
  },
  {
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "Iconthree.png"
  }
];

function WhoCanUse() {
  return (
    <section className="who-can-use-section">
      <h2>Manage your entire community in a single system</h2>
      <p className="subtitle">Who is Nextcent suitable for?</p>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <img src={feature.icon} alt={feature.title} className="card-icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhoCanUse;
