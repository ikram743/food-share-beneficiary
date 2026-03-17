// components/AdminLayout.tsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout: React.FC = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-logo">
          <i className="fas fa-leaf"></i>
          <span>FoodShare Admin</span>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/admin" end className="nav-item">
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/admin/users" className="nav-item">
            <i className="fas fa-users"></i>
            <span>Users</span>
          </NavLink>
          <NavLink to="/admin/surplus" className="nav-item">
            <i className="fas fa-boxes"></i>
            <span>Surplus Listings</span>
          </NavLink>
          <NavLink to="/admin/notifications" className="nav-item">
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
          </NavLink>
          <NavLink to="/admin/impact" className="nav-item">
            <i className="fas fa-chart-line"></i>
            <span>Impact Reports</span>
          </NavLink>
          <NavLink to="/admin/settings" className="nav-item">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </NavLink>
        </nav>
      </aside>
      <main className="admin-main">
        <header className="admin-header">
          <h1>Admin Panel</h1>
          <div className="admin-profile">
            <span>Admin User</span>
            <i className="fas fa-user-circle"></i>
          </div>
        </header>
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
