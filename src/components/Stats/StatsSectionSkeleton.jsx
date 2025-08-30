import React from "react";
import "./StatsSectionSkeleton.css";

function StatsSectionSkeleton() {
  return (
    <section className="stats-skeleton">
      <div className="skeleton skeleton-title"></div>
      <div className="stats-skeleton-grid">
        <div className="skeleton skeleton-box"></div>
        <div className="skeleton skeleton-box"></div>
        <div className="skeleton skeleton-box"></div>
        <div className="skeleton skeleton-box"></div>
      </div>
    </section>
  );
}

export default StatsSectionSkeleton;
