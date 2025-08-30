// App.jsx
import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavbarSkeleton from "./components/Navbar/NavbarSkeleton";

import Banner from "./components/Banner/Banner";
import BannerSkeleton from "./components/Banner/BannerSkeleton";

import Clients from "./components/Client/Clients";
import ClientsSkeleton from "./components/Client/ClientsSkeleton";

import WhoCanUse from "./components/WhocanUse/WhoCanuse.jsx";
import WhoCanUseSkeleton from "./components/WhocanUse/WhoCanUseSkeleton";

import FeatureSection from "./components/Feature/FeatureSection";
import FeatureSectionSkeleton from "./components/Feature/FeatureSectionSkeleton";

import StatsSection from "./components/Stats/StatsSection";
import StatsSectionSkeleton from "./components/Stats/StatsSectionSkeleton";

import FooterDesign from "./components/Footer/FooterDesign.jsx";
import FooterDesignSkeleton from "./components/Footer/FooterDesignSkeleton";

import Testimonial from "./components/Test/Testimonial";
import TestimonialSkeleton from "./components/Test/TestimonialSkeleton";

import BlogSection from "./components/Blog/BlogSection";
import BlogSkeleton from "./components/Blog/BlogSkeleton";

import CTASection from "./components/CTA/CTASection";
import CTASectionSkeleton from "./components/CTA/CTASectionSkeleton";

import Footer from "./components/Bottom/BottomSection.jsx";
import FooterSkeleton from "./components/Bottom/BottomSectionSkeleton.jsx";

import RevealOnScroll from "./components/common/RevealOnScroll";
import "./styles/reveal.css";

import ContactPopup from "./components/Contact/ContactPopup.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  // 🔐 user state
  const [user, setUser] = useState(null);

  // load auth from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem("auth");
      }
    }
  }, []);

  // fake skeleton delay
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  // helper: login / logout
  const loginUser = (u) => {
    setUser(u);
    localStorage.setItem("auth", JSON.stringify(u));
  };
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  const HomePage = () => (
    <Fragment>
      {loading ? (
        <NavbarSkeleton />
      ) : (
        <Navbar user={user} setUser={loginUser} onLogout={logoutUser} />
      )}

      {loading ? (
        <BannerSkeleton />
      ) : (
        <RevealOnScroll>
          <Banner user={user} />
        </RevealOnScroll>
      )}

      {loading ? <ClientsSkeleton /> : <RevealOnScroll><Clients /></RevealOnScroll>}
      {loading ? <WhoCanUseSkeleton /> : <RevealOnScroll><WhoCanUse /></RevealOnScroll>}
      {loading ? <FeatureSectionSkeleton /> : <RevealOnScroll><FeatureSection /></RevealOnScroll>}
      {loading ? <StatsSectionSkeleton /> : <RevealOnScroll><StatsSection /></RevealOnScroll>}
      {loading ? <FooterDesignSkeleton /> : <RevealOnScroll><FooterDesign /></RevealOnScroll>}
      {loading ? <TestimonialSkeleton /> : <RevealOnScroll><Testimonial /></RevealOnScroll>}
      {loading ? <BlogSkeleton /> : <RevealOnScroll><BlogSection /></RevealOnScroll>}
      {loading ? <CTASectionSkeleton /> : <RevealOnScroll><CTASection /></RevealOnScroll>}
      {loading ? <FooterSkeleton /> : <RevealOnScroll><Footer /></RevealOnScroll>}

      {/* Contact aware of login */}
      <ContactPopup user={user} />
    </Fragment>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setUser={loginUser} />} />
        <Route path="/home" element={<h1>Welcome Home!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
