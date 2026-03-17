import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  // In a real app, fetch data from an API
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <i className="fas fa-store"></i>
          <div className="stat-info">
            <h3>Total Donors</h3>
            <p>48</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-hand-holding-heart"></i>
          <div className="stat-info">
            <h3>Total Beneficiaries</h3>
            <p>32</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-boxes"></i>
          <div className="stat-info">
            <h3>Active Surplus</h3>
            <p>124</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-utensils"></i>
          <div className="stat-info">
            <h3>Meals Saved</h3>
            <p>5,230</p>
          </div>
        </div>
      </div>

      {/* Recent activity table */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <table className="activity-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bakery Algiers</td>
              <td>Added surplus: 20 baguettes</td>
              <td>5 min ago</td>
            </tr>
            <tr>
              <td>Food Bank Oran</td>
              <td>Claimed surplus</td>
              <td>15 min ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
