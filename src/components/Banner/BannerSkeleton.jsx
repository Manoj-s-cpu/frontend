import React from "react";
import "./BannerSkeleton.css"; // ✅ skeleton styles import

function BannerSkeleton() {
  return (
    <section className="banner-skeleton">
      <div className="skeleton-text title"></div>
      <div className="skeleton-text subtitle"></div>
      <div className="skeleton-btn"></div>
    </section>
  );
}

export default BannerSkeleton;
