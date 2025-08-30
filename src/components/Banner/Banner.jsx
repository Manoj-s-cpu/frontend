// Banner.jsx
import React, { useState } from "react";
import "./Banner.css";

function Banner({ user }) {
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Contact Submit
  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    let payload;

    if (user) {
      // 🔐 Logged-in → only send authEmail + message
      payload = {
        authEmail: user.email,
        message: formData.message,
      };
    } else {
      // Guest → send name, email, message
      payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong!");

      alert(data.message);
      setShowContact(false);

      // clear form
      if (user) {
        setFormData({ ...formData, message: "" });
      } else {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="banner">
      {/* ✅ Banner Content */}
      <div className="banner-content">
        <h1 className="banner-title">
          Lessons and insights <br />
          <span className="highlight">from 8 years</span>
        </h1>

        <p className="banner-subtitle">
          Where to grow your business as a photographer: site or social media?
        </p>

        {/* ✅ Contact Button */}
        <button className="banner-btn" onClick={() => setShowContact(true)}>
          Contact
        </button>
      </div>

      <div className="banner-image">
        <img src="/bimage.png" alt="Business growth illustration" />
      </div>

      {/* ✅ Contact Modal */}
      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Us</h2>
            <form className="modal-form" onSubmit={handleContact}>
              {/* Show name/email only if NOT logged in */}
              {!user && (
                <>
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </>
              )}

              {/* Message Field */}
              <label>Message:</label>
              <textarea
                placeholder="Enter your message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              {errorMsg && <p className="error-text">{errorMsg}</p>}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
            <button className="close-btn" onClick={() => setShowContact(false)}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Banner;
