import React from "react";
import "./TestimonialSkeleton.css";

function TestimonialSkeleton() {
  return (
    <section className="testimonial-skeleton">
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-subtitle"></div>
      
      <div className="testimonial-skeleton-grid">
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
      </div>
    </section>
  );
}

export default TestimonialSkeleton;
