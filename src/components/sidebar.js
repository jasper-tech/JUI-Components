import React, { useState } from "react";
import "../styles/sidebar.css";
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

const Sidebar = () => {
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
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2>{isCollapsed ? "" : "SideBar"}</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? "→" : "←"}
        </button>
      </div>

      <div className="sidebar-content">
        <nav className="sidebar-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={activeItem === index ? "active" : ""}
                onClick={() => handleItemClick(index)}
              >
                <span
                  className={`icon ${
                    activeItem === index ? "active-icon" : ""
                  }`}
                >
                  {item.icon}
                </span>
                {!isCollapsed && <span className="label">{item.label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <ul>
          <li
            className={activeItem === menuItems.length ? "active-logout" : ""}
            onClick={() => handleItemClick(menuItems.length)}
          >
            <span
              className={`icon ${
                activeItem === menuItems.length ? "active-icon" : ""
              }`}
            >
              <FaSignOutAlt />
            </span>
            {!isCollapsed && <span className="label">Logout</span>}
          </li>
        </ul>
      </div>

      {/* <div className="sidebar-footer">{!isCollapsed && <p>© 2025 JUI</p>}</div> */}
    </div>
  );
};

export default Sidebar;
