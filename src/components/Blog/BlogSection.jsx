import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <section className="blog-section">
      {/* 🔹 Title + Subtitle */}
      <div className="blog-header">
        <h2>Caring is the new marketing</h2>
        <p>
          The Nextcent blog is the best place to read about the latest membership insights, 
          trends and more. See who's joining the community, read about how our community 
          are increasing their membership income and lot's more.
        </p>
      </div>

      {/* 🔹 Blog Cards */}
      <div className="blog-cards">
        <div className="blog-card">
          <img src="imageone.png" alt="Blog 1" />
          <div className="blog-content">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <a href="#" className="read-more">Readmore →</a>
          </div>
        </div>

        <div className="blog-card">
          <img src="imagetwo.png" alt="Blog 2" />
          <div className="blog-content">
            <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
            <a href="#" className="read-more">Readmore →</a>
          </div>
        </div>

        <div className="blog-card">
          <img src="imagethree.png" alt="Blog 3" />
          <div className="blog-content">
            <h3>Revamping the Membership Model with Triathlon Australia</h3>
            <a href="#" className="read-more">Readmore →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
