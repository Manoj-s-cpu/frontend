import React from "react";
import "./ClientsSkeleton.css";

function ClientsSkeleton() {
  return (
    <section className="clients-skeleton">
      <div className="clients-skel-title"></div>
      <div className="clients-skel-logos">
        <div className="clients-skel-box"></div>
        <div className="clients-skel-box"></div>
        <div className="clients-skel-box"></div>
        <div className="clients-skel-box"></div>
        <div className="clients-skel-box"></div>
      </div>
    </section>
  );
}

export default ClientsSkeleton;
