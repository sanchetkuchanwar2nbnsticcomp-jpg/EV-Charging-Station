import React, { useState, useEffect } from "react";
import "./AdminPages.css";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // stores selected row

  useEffect(() => {
    const demoUsers = [
      { id: "001", name: "Ashwin", email: "ashwin@example.com", role: "User" },
      { id: "002", name: "Rahul", email: "rahul@example.com", role: "User" },
    ];
    setUsers(demoUsers);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const handleSave = () => {
    setUsers(
      users.map((u) => (u.id === editingUser.id ? editingUser : u))
    );
    setEditingUser(null);
  };

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">👤 Manage Users</h1>

      <div className="admin-table-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button className="admin-btn edit" onClick={() => setEditingUser(u)}>
                    Edit
                  </button>
                  <button className="admin-btn delete" onClick={() => handleDelete(u.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* -------- EDIT MODAL -------- */}
      {editingUser && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <h2>Edit User</h2>

            <label>User Name</label>
            <input
              type="text"
              value={editingUser.name}
              onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              value={editingUser.email}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
            />

            <label>Role</label>
            <select
              value={editingUser.role}
              onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
            >
              <option>User</option>
              <option>Admin</option>
            </select>

            <div className="admin-modal-actions">
              <button className="admin-btn edit" onClick={handleSave}>
                Save
              </button>
              <button className="admin-btn delete" onClick={() => setEditingUser(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ManageUsers;
