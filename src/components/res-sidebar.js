import React, { useState } from "react";
import {
  FaHome,
  FaChartBar,
  FaCog,
  FaUserAlt,
  FaClipboard,
  FaBell,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const ResponsiveSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const menuItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaChartBar />, label: "Analytics", path: "/analytics" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
    { icon: <FaUserAlt />, label: "Profile", path: "/profile" },
    { icon: <FaClipboard />, label: "Projects", path: "/projects" },
    { icon: <FaBell />, label: "Notifications", path: "/notifications" },
    { icon: <FaUserCircle />, label: "Account Info", path: "/account" },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div
      className={`flex flex-col h-screen bg-[#2c3e50] text-[#ecf0f1] transition-all ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-5 border-b border-[#34495e]">
        <h2 className={`text-lg font-bold ${isCollapsed ? "hidden" : "block"}`}>
          SideBar
        </h2>
        <button className="text-xl text-[#ecf0f1] p-2" onClick={toggleSidebar}>
          {isCollapsed ? "→" : "←"}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="sidebar-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center p-4 cursor-pointer transition-all hover:bg-[#34495e] ${
                  activeItem === index
                    ? "bg-[#3498db] border-l-4 border-[#2980b9]"
                    : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <span
                  className={`text-xl mr-4 ${
                    activeItem === index ? "text-[#2980b9]" : "text-[#ecf0f1]"
                  }`}
                >
                  {item.icon}
                </span>
                {!isCollapsed && <span>{item.label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-auto border-t border-[#34495e]">
        <ul>
          <li
            className={`flex items-center p-4 cursor-pointer transition-all hover:bg-[#34495e] ${
              activeItem === menuItems.length
                ? "bg-[#e74c3c] text-[#e74c3c]"
                : ""
            }`}
            onClick={() => handleItemClick(menuItems.length)}
          >
            <span
              className={`text-xl mr-4 ${
                activeItem === menuItems.length
                  ? "text-[#e74c3c]"
                  : "text-[#ecf0f1]"
              }`}
            >
              <FaSignOutAlt />
            </span>
            {!isCollapsed && <span>Logout</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
