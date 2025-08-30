import React from "react";
import "./FeatureSection.css";

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-content">
        {/* Public folder la irukura image direct ah use pannunga */}
        <img src="Frame.png" alt="Feature" className="feature-image" />

        <div className="feature-text">
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
            Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
