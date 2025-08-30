// components/Contact/ContactPopup.jsx
import React, { useState } from "react";
import "./ContactPopup.css";

function ContactPopup({ user }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // logged in -> only message (name/email from user)
    const payload = user
      ? { name: user.name, email: user.email, message: form.message }
      : form;

    try {
      const res = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");
      setStatus("✅ Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ " + err.message);
    }
  };

  return (
    <div className="contact-popup">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* IF not logged in -> show name/email */}
        {!user ? (
          <>
            <label>Name:</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your name"
            />

            <label>Email:</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email"
            />
          </>
        ) : null}

        {/* Message always visible */}
        <label>Message:</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Enter your message"
        />

        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default ContactPopup;
