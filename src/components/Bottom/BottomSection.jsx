import React from "react";
import "./BottomSection.css";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomSection = () => {
  return (
    <section className="bottom-section">
      <div className="bottom-container">
        {/* Logo + Copyright */}
        <div className="bottom-left">
          <h2 className="bottom-logo">
            <span className="logo-icon">▲</span> Nexcent
          </h2>
          <p className="bottom-text">
            Copyright © 2020 Landify UI Kit.<br />All rights reserved
          </p>
          <div className="bottom-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Company */}
        <div className="bottom-links">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="bottom-links">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bottom-newsletter">
          <h3>Stay up to date</h3>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email address" />
            <button>➤</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
