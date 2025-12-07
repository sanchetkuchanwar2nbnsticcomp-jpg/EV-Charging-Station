import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.webp";
import car3 from "../assets/car3.jpg";
import app1 from "../assets/app1.jpg";
import app2 from "../assets/app2.jpg";

import "./../styles/main.css";

function Home() {
  const images = [car1, car2, car3];
  const [currentImage, setCurrentImage] = useState(0);

  const navigate = useNavigate(); // ✅ added

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
   {/* Hero Section */}
<section
  className="hero"
  style={{
    backgroundImage: `url(${images[currentImage]})`,
  }}
>
  <div className="hero-overlay">
    <div className="hero-text">
      <h1>India’s Premier EV Charging Network ⚡</h1>
      <p>
        Power your electric journey with fast, reliable, and sustainable
        charging stations across the country.
      </p>

      {/* FIXED Hero Button */}
      <button
        className="hero-btn"
        onClick={() => navigate("/stations")}
      >
        Find Charging Stations
      </button>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section
        className="stats"
        style={{ backgroundColor: "#fff", color: "#000", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          Our Growing EV Network ⚡
        </h2>

        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          <div
            className="stat-box"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "2rem",
              borderRadius: "12px",
              width: "220px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
          >
            <h3
              style={{ fontSize: "2rem", color: "#e30022", marginBottom: "0.5rem" }}
            >
              13,500+
            </h3>
            <p>Charging Points Installed Nationwide</p>
          </div>

          <div
            className="stat-box"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "2rem",
              borderRadius: "12px",
              width: "220px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
          >
            <h3
              style={{ fontSize: "2rem", color: "#e30022", marginBottom: "0.5rem" }}
            >
              10M kW+
            </h3>
            <p>Energy Delivered through our Network</p>
          </div>

          <div
            className="stat-box"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "2rem",
              borderRadius: "12px",
              width: "220px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
          >
            <h3
              style={{ fontSize: "2rem", color: "#e30022", marginBottom: "0.5rem" }}
            >
              26
            </h3>
            <p>Cities Powered with Fast Charging</p>
          </div>

          <div
            className="stat-box"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "2rem",
              borderRadius: "12px",
              width: "220px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
          >
            <h3
              style={{ fontSize: "2rem", color: "#e30022", marginBottom: "0.5rem" }}
            >
              350+
            </h3>
            <p>Corporate & Fleet Partners Onboard</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" style={{ backgroundColor: "#fff", color: "#000" }}>
        <h2>What makes us a cut above the rest?</h2>
        <p>
          Our constant innovation and tech integrations give a full-stack experience
          to EV users.
        </p>

        <div className="feature-grid">
          <div className="feature-card" style={{ backgroundColor: "#000", color: "#fff" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3571/3571534.png"
              alt="Smart Energy"
              style={{ filter: "invert(1)", width: "80px", marginBottom: "1rem" }}
            />
            <h3>Smart Energy Optimization</h3>
            <p>
              Intelligent load management ensures every charge session is fast,
              efficient, and eco-friendly.
            </p>
          </div>

          <div className="feature-card" style={{ backgroundColor: "#000", color: "#fff" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2804/2804116.png"
              alt="Seamless Connectivity"
              style={{ filter: "invert(1)", width: "80px", marginBottom: "1rem" }}
            />
            <h3>Seamless Connectivity</h3>
            <p>
              Stay connected with real-time station tracking and availability updates
              through our app.
            </p>
          </div>

          <div className="feature-card" style={{ backgroundColor: "#000", color: "#fff" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6753/6753029.png"
              alt="Cloud Platform"
              style={{ filter: "invert(1)", width: "80px", marginBottom: "1rem" }}
            />
            <h3>Cloud-Based Reliability</h3>
            <p>
              Our cloud infrastructure ensures uptime, security, and smooth operation
              for all users.
            </p>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section
        className="app-section"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          The ChargeZone App is All You Need ⚡
        </h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem",
            color: "#333",
          }}
        >
          Experience total control and convenience with our advanced ChargeZone app.
        </p>

        <div
          className="app-content"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          <div className="app-features">
            <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", lineHeight: "2" }}>
              <li>🔋 Multiple Payment Modes</li>
              <li>📍 Track & Monitor</li>
              <li>📱 Find Nearby Charge Spots</li>
              <li>🕒 Reserved Time Slots</li>
              <li>💳 Integrated Wallet</li>
              <li>✨ Seamless UI/UX</li>
            </ul>
          </div>

          <div className="app-images" style={{ display: "flex", gap: "1rem" }}>
            <img
              src={app1}
              alt="ChargeZone App Screenshot 1"
              style={{
                width: "200px",
                borderRadius: "20px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
              }}
            />
            <img
              src={app2}
              alt="ChargeZone App Screenshot 2"
              style={{
                width: "200px",
                borderRadius: "20px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Join the Future of EV Mobility 🚗⚡
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 2rem", color: "#ddd" }}>
          Be part of India’s growing electric revolution with ChargeZone’s reliable
          and fast network.
        </p>
        <button
          className="cta-btn"
          style={{
            backgroundColor: "#e30022",
            color: "#fff",
            border: "none",
            padding: "1rem 2rem",
            borderRadius: "30px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#b1001b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e30022")}
        >
          Get Started
        </button>
      </section>
    </>
  );
}

export default Home;
