import React, { useState } from "react";
import "./Users.css";

const Users: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "donor" | "beneficiary">("all");

  // Mock data
  const users = [
    {
      id: 1,
      name: "Artisan Bakery",
      type: "donor",
      email: "bakery@example.com",
      status: "active",
    },
    {
      id: 2,
      name: "Food Bank Algiers",
      type: "beneficiary",
      email: "contact@foodbank.dz",
      status: "pending",
    },
  ];

  const filteredUsers =
    filter === "all" ? users : users.filter((u) => u.type === filter);

  return (
    <div className="users-page">
      <div className="users-header">
        <h2>Manage Users</h2>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "donor" ? "active" : ""}
            onClick={() => setFilter("donor")}
          >
            Donors
          </button>
          <button
            className={filter === "beneficiary" ? "active" : ""}
            onClick={() => setFilter("beneficiary")}
          >
            Beneficiaries
          </button>
        </div>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <span className={`badge ${user.type}`}>{user.type}</span>
              </td>
              <td>{user.email}</td>
              <td>
                <span className={`status ${user.status}`}>{user.status}</span>
              </td>
              <td>
                <button className="btn-icon">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn-icon">
                  <i className="fas fa-ban"></i>
                </button>
                <button className="btn-icon">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
