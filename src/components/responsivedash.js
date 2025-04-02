import React from "react";
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

const ResponsiveDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-6">
      {/* ResponsiveDashboard Header */}
      <h1 className="text-white text-2xl font-semibold mb-6">Dashboard</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaChartBar className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Analytics</h3>
          </div>
          <p className="text-gray-400">View your analytics and trends.</p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaUsers className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Users</h3>
          </div>
          <p className="text-gray-400">Manage your users and their roles.</p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaTasks className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Tasks</h3>
          </div>
          <p className="text-gray-400">
            Keep track of your tasks and projects.
          </p>
        </div>

        {/* Row 2 */}
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaComments className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Messages</h3>
          </div>
          <p className="text-gray-400">
            View your recent messages and notifications.
          </p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaRegClock className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Recent Activity</h3>
          </div>
          <p className="text-gray-400">
            See your most recent activity and updates.
          </p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaUserAlt className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Profile</h3>
          </div>
          <p className="text-gray-400">Manage your account and preferences.</p>
        </div>

        {/* Row 3 */}
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaClipboard className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Projects</h3>
          </div>
          <p className="text-gray-400">
            Monitor your ongoing and completed projects.
          </p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaBell className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Notifications</h3>
          </div>
          <p className="text-gray-400">View recent notifications and alerts.</p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaRocket className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Launch</h3>
          </div>
          <p className="text-gray-400">Quick access to launch new projects.</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDashboard;
