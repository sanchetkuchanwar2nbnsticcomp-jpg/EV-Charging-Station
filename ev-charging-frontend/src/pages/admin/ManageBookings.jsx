import React from "react";
import "./AdminPages.css";

function ManageBookings() {
  return (
    <div className="admin-page">
      <h1 className="admin-page-title">📘 Manage Bookings</h1>

      <div className="admin-table-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User</th>
              <th>Station</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>B001</td>
              <td>Ashwin</td>
              <td>City Center Station</td>
              <td>2025-02-10</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>B002</td>
              <td>Rahul</td>
              <td>East Point Station</td>
              <td>2025-02-11</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBookings;
