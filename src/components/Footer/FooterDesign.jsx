import React from "react";
import "./FooterDesign.css";

const FooterDesign = () => {
  return (
    <section className="footer-design">
      <div className="footer-container">
        {/* Left Side - Image */}
        <div className="footer-left">
          <img src="/Frameone.png" alt="Footer Illustration" />
        </div>

        {/* Right Side - Content */}
        <div className="footer-right">
          <h2>
            How to design your site footer <br />
            like we did
          </h2>
          <p>
         Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue 
         nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat
          a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea
           dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod
            augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget
             nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac
             , hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida. 
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FooterDesign;
