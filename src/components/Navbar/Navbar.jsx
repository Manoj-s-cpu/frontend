import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Register Modal
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  // Login Modal
  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navRef = useRef(null);

  // Close nav + dropdown
  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Outside click close
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Escape close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeAll();
        setShowRegister(false);
        setShowLogin(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Register Submit API
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Register failed!");

      alert(data.message);
      setShowRegister(false);
      setFormData({ name: "", email: "", password: "" });

      // After register → open login
      setShowLogin(true);
    } catch (err) {
      alert(err.message);
    }
  };

  // ✅ Login Submit API
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed!");

      alert("Login success!");
      setUser({ name: data.name, email: data.email });
      setShowLogin(false);
      setLoginData({ email: "", password: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    setUser(null);
    closeAll();
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/Icon.png" alt="Logo" />
          <h2>Nexcent</h2>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Menu */}
        <div className={`navbar-right ${isOpen ? "active" : ""}`}>
          <ul className="navbar-menu">
            <li
              className="dropdown"
              onClick={() => setActiveDropdown(activeDropdown === "features" ? null : "features")}
            >
              <button className="menu-link">Home </button>
              <ul className={`dropdown-menu ${activeDropdown === "features" ? "show" : ""}`}>
                <li><a href="#f1">Overview</a></li>
                <li><a href="#f2">Updates</a></li>
                <li><a href="#f3">Gallery</a></li>
              </ul>
            </li>

            {/* Features Dropdown */}
            <li
              className="dropdown"
              onClick={() => setActiveDropdown(activeDropdown === "features" ? null : "features")}
            >
              <button className="menu-link">Features </button>
              <ul className={`dropdown-menu ${activeDropdown === "features" ? "show" : ""}`}>
                <li><a href="#f1">Dashboard</a></li>
                <li><a href="#f2">Analytics</a></li>
                <li><a href="#f3">Report</a></li>
              </ul>
            </li>

            {/* Members Dropdown */}
            <li
              className="dropdown"
              onClick={() => setActiveDropdown(activeDropdown === "members" ? null : "members")}
            >
              <button className="menu-link">Members </button>
              <ul className={`dropdown-menu ${activeDropdown === "members" ? "show" : ""}`}>
                <li><a href="#m1">Member List</a></li>
                <li><a href="#m2">Member Profile</a></li>
                <li><a href="#m2">Member Benifit</a></li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li
              className="dropdown"
              onClick={() => setActiveDropdown(activeDropdown === "blog" ? null : "blog")}
            >
              <button className="menu-link">Blog </button>
              <ul className={`dropdown-menu ${activeDropdown === "blog" ? "show" : ""}`}>
                <li><a href="#b1">Latest</a></li>
                <li><a href="#b2">Popular</a></li>
              </ul>
            </li>

            {/* Pricing */}
           <li
              className="dropdown"
              onClick={() => setActiveDropdown(activeDropdown === "pricing" ? null : "pricig")}
            >
              <button className="menu-link">Pricing</button>
              <ul className={`dropdown-menu ${activeDropdown === "pricing" ? "show" : ""}`}>
                <li><a href="#b1"> Unlimited Projects</a></li>
                <li><a href="#b2">100 GB Storage</a></li>
              </ul>
            </li>


            {/* Show Register/Login OR User */}
            {!user ? (
              <li
                className="dropdown"
                onClick={() => setActiveDropdown(activeDropdown === "register" ? null : "register")}
              >
                <button className="menu-link">Register </button>
                <ul className={`dropdown-menu ${activeDropdown === "register" ? "show" : ""}`}>
                  <li>
                    <button onClick={() => setShowRegister(true)}>Register</button>
                  </li>
                  <li>
                    <button onClick={() => setShowLogin(true)}>Login</button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="dropdown user-dropdown">
                <button className="menu-link">Hi, {user.name}</button>
                <ul className={`dropdown-menu ${activeDropdown === "user" ? "show" : ""}`}>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Register Modal */}
      {showRegister && (
        <div className="modal-overlay" onClick={() => setShowRegister(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Register</h2>
            <form onSubmit={handleRegister} className="modal-form">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button type="submit" className="submit-btn">Register</button>
            </form>
            <button className="close-btn" onClick={() => setShowRegister(false)}>×</button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="modal-form">
              <input
                type="email"
                placeholder="Email"
                required
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <button type="submit" className="submit-btn">Login</button>
            </form>
            <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
