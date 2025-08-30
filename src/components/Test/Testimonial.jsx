import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Left Side - Logo/Image */}
        <div className="testimonial-left">
          <img src="frametwo.png" alt="Tesla Logo" />
        </div>

        {/* Right Side - Content */}
        <div className="testimonial-right">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis 
             dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. 
              sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie 
              arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
               mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla 
               sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
                potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget
                . Quisque vulputate odio neque, eget efficitur libero condimentum id.
                 Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h3>Tim Smith</h3>
          <span>British Dragon Boat Racing Association</span>

          {/* Logos + Button */}
          <div className="testimonial-logos">
            <img src="/one.png" alt="logo1" />
            <img src="/two.png" alt="logo2" />
            <img src="/three.png" alt="logo3" />
            <img src="/four.png" alt="logo4" />
            <img src="/five.png" alt="logo5" />
            <button className="customers-btn">Meet all customers →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
