import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";
import { FaUsers, FaHandsHelping, FaCalendarCheck, FaCreditCard } from "react-icons/fa";

function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const stepTime = 16; // ~60fps
            const increment = target / (duration / stepTime);

            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, stepTime);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration]);

  return <h3 ref={ref}>{count.toLocaleString()}</h3>; // 👉 comma format
}

function StatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inview");
          } else {
            entry.target.classList.remove("inview");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="stats-wrapper" ref={sectionRef}>
      {/* Left Content */}
      <div className="stats-left">
        <h2>
          Helping a local <br />
          <span>business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>

      {/* Right Content */}
      <div className="stats-right">
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div>
            <Counter target={2245341} />
            <p>Members</p>
          </div>
        </div>

        <div className="stat-card">
          <FaHandsHelping className="stat-icon" />
          <div>
            <Counter target={46328} />
            <p>Clubs</p>
          </div>
        </div>

        <div className="stat-card">
          <FaCalendarCheck className="stat-icon" />
          <div>
            <Counter target={828867} />
            <p>Event Bookings</p>
          </div>
        </div>

        <div className="stat-card">
          <FaCreditCard className="stat-icon" />
          <div>
            <Counter target={1926436} />
            <p>Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
