import React from "react";
import "./CTASkeleton.css"; // style file

const CTASectionSkeleton = () => {
  return (
    <div className="cta-skeleton">
      <div className="cta-line title"></div>
      <div className="cta-line subtitle"></div>
      <div className="cta-button"></div>
    </div>
  );
};

export default CTASectionSkeleton;
