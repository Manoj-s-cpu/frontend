import React from "react";
import "./Clients.css";

// Replace these with your actual logo images in public folder
const clientLogos = [
  "/Logoone.png",
  "/Logotwo.png",
  "/Logothree.png",
  "/Logofour.png",
  "/Logofive.png",
  "/Logosix.png"
];

function Clients() {
  return (
    <section className="clients-section">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="clients-logos">
        {clientLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Clients;
