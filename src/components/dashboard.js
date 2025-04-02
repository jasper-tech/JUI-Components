import React from "react";
import "../styles/dashboard.css";
import {
  FaChartBar,
  FaUsers,
  FaTasks,
  FaComments,
  FaRegClock,
  FaUserAlt,
  FaClipboard,
  FaBell,
  FaRocket,
} from "react-icons/fa";
// import DateTimeRegion from "./dashd&tzone";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <h1 style={{ color: "white", fontSize: "30px" }}>Dashboard</h1>

      {/* Cards Grid */}
      <div className="dashboard-cards">
        {/* Row 1 */}
        <div className="dashboard-card large-card">
          <div className="dashboard-card-header">
            <FaChartBar />
            <h3>Analytics</h3>
          </div>
          <p className="dashboard-card-content">
            View your analytics and trends.
          </p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <FaUsers />
            <h3>Users</h3>
          </div>
          <p className="dashboard-card-content">
            Manage your users and their roles.
          </p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <FaTasks />
            <h3>Tasks</h3>
          </div>
          <p className="dashboard-card-content">
            Keep track of your tasks and projects.
          </p>
        </div>

        {/* Row 2 */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <FaComments />
            <h3>Messages</h3>
          </div>
          <p className="dashboard-card-content">
            View your recent messages and notifications.
          </p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <FaRegClock />
            <h3>Recent Activity</h3>
          </div>
          <p className="dashboard-card-content">
            See your most recent activity and updates.
          </p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <FaUserAlt />
            <h3>Profile</h3>
          </div>
          <p className="dashboard-card-content">
            Manage your account and preferences.
          </p>
        </div>

        {/* Row 3 */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <FaClipboard />
            <h3>Projects</h3>
          </div>
          <p className="dashboard-card-content">
            Monitor your ongoing and completed projects.
          </p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <FaBell />
            <h3>Notifications</h3>
          </div>
          <p className="dashboard-card-content">
            View recent notifications and alerts.
          </p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <FaRocket />
            <h3>Launch</h3>
          </div>
          <p className="dashboard-card-content">
            Quick access to launch new projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
