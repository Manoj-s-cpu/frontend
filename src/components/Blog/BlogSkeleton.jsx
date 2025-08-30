import React from "react";
import "./BlogSkeleton.css"; // Skeleton CSS

function BlogSkeleton() {
  return (
    <section className="blog-skeleton">
      <div className="skeleton-header"></div>
      <div className="skeleton-cards">
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </div>
    </section>
  );
}

export default BlogSkeleton;
