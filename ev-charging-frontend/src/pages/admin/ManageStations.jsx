import React, { useState, useEffect } from "react";
import "./AdminPages.css";

function ManageStations() {
  const [stations, setStations] = useState([]);
  const [editingStation, setEditingStation] = useState(null);

  useEffect(() => {
    const demoStations = [
      { id: "ST-01", name: "City Center Station", location: "Chennai", status: "Active" },
      { id: "ST-02", name: "East Point Station", location: "Bangalore", status: "Inactive" },
    ];
    setStations(demoStations);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Delete this station?")) {
      setStations(stations.filter((s) => s.id !== id));
    }
  };

  const handleSave = () => {
    setStations(
      stations.map((s) => (s.id === editingStation.id ? editingStation : s))
    );
    setEditingStation(null);
  };

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">⚡ Manage Stations</h1>

      <div className="admin-table-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Station ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {stations.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.location}</td>
                <td>{s.status}</td>
                <td>
                  <button className="admin-btn edit" onClick={() => setEditingStation(s)}>
                    Edit
                  </button>
                  <button className="admin-btn delete" onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* -------- EDIT MODAL -------- */}
      {editingStation && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <h2>Edit Station</h2>

            <label>Name</label>
            <input
              type="text"
              value={editingStation.name}
              onChange={(e) => setEditingStation({ ...editingStation, name: e.target.value })}
            />

            <label>Location</label>
            <input
              type="text"
              value={editingStation.location}
              onChange={(e) =>
                setEditingStation({ ...editingStation, location: e.target.value })
              }
            />

            <label>Status</label>
            <select
              value={editingStation.status}
              onChange={(e) =>
                setEditingStation({ ...editingStation, status: e.target.value })
              }
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <div className="admin-modal-actions">
              <button className="admin-btn edit" onClick={handleSave}>
                Save
              </button>
              <button className="admin-btn delete" onClick={() => setEditingStation(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageStations;
