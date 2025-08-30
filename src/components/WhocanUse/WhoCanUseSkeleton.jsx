import React from "react";
import "./WhoCanUseSkeleton.css";  // ✅ separate CSS file

function WhoCanUseSkeleton() {
  return (
    <section className="who-skeleton">
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-subtitle"></div>
      <div className="who-skeleton-grid">
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
      </div>
    </section>
  );
}

export default WhoCanUseSkeleton;
