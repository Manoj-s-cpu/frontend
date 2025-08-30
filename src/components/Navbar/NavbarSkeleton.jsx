// src/components/Navbar/NavbarSkeleton.jsx
import React from "react";
import "./NavbarSkeleton.css";  // separate css file for skeleton

function NavbarSkeleton() {
  return (
    <nav className="navbar skeleton-navbar">
      {/* Logo placeholder */}
      <div className="skeleton-logo shimmer"></div>

      {/* Menu placeholder */}
      <ul className="skeleton-menu">
        <li className="skeleton-item shimmer"></li>
        <li className="skeleton-item shimmer"></li>
        <li className="skeleton-item shimmer"></li>
        <li className="skeleton-item shimmer"></li>
        <li className="skeleton-item shimmer"></li>
      </ul>

      {/* Button placeholder */}
      <div className="skeleton-btn shimmer"></div>
    </nav>
  );
}

export default NavbarSkeleton;
