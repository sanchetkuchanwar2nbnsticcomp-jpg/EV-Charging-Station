import React from "react";

export default function Stations() {
  const stations = [
    {
      name: "EV Station - A",
      address: "Near Central Mall, Pune",
      connectors: "Type-2, CCS",
      status: "Available",
    },
    {
      name: "EV Station - B",
      address: "Hinjewadi Phase 2, Pune",
      connectors: "CCS, CHAdeMO",
      status: "Busy",
    },
    {
      name: "EV Station - C",
      address: "Wakad Flyover, Pune",
      connectors: "Type-2",
      status: "Offline",
    },
    {
      name: "EV Station - D",
      address: "MG Road, Pune",
      connectors: "Type-2, CCS",
      status: "Available",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "85%", textAlign: "center" }}>
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            marginBottom: "40px",
            textShadow: "0 0 20px rgba(255,255,255,0.5)",
          }}
        >
          Charging Stations
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {stations.map((station, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                padding: "25px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                transition: "0.3s",
              }}
              className="station-card"
            >
              <h2
                style={{
                  color: "white",
                  marginBottom: "10px",
                  fontSize: "22px",
                }}
              >
                {station.name}
              </h2>

              <p style={{ color: "#cfcfcf", fontSize: "14px", marginBottom: "5px" }}>
                📍 {station.address}
              </p>

              <p style={{ color: "#cfcfcf", fontSize: "14px", marginBottom: "5px" }}>
                🔌 Connectors: {station.connectors}
              </p>

              <p
                style={{
                  fontSize: "14px",
                  marginTop: "10px",
                  color:
                    station.status === "Available"
                      ? "#4bff62"
                      : station.status === "Busy"
                      ? "#ffcc00"
                      : "#ff4b4b",
                }}
              >
                ● {station.status}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "none",
                  background:
                    station.status === "Available"
                      ? "#007bff"
                      : "rgba(100,100,100,0.3)",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
