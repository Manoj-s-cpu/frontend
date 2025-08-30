import React from "react";
import "./FooterDesignSkeleton.css";

function FooterDesignSkeleton() {
  return (
    <footer className="footer-skeleton">
      <div className="skeleton skeleton-logo"></div>

      <div className="footer-skeleton-grid">
        <div className="skeleton skeleton-col"></div>
        <div className="skeleton skeleton-col"></div>
        <div className="skeleton skeleton-col"></div>
      </div>

      <div className="skeleton skeleton-bottom"></div>
    </footer>
  );
}

export default FooterDesignSkeleton;
