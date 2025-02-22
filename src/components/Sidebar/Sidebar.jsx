import React from "react";
import { FaUser, FaUserPlus, FaAt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">My Task</h2>

      <nav className="sidebar-menu">
        <NavLink to="/" className="sidebar-item">
          <FaUser className="icon" />
          <span>Students</span>
        </NavLink>
        <NavLink to="/addStudent" className="sidebar-item">
          <FaUserPlus className="icon" />
          <span>Add Students</span>
        </NavLink>

        <NavLink className="sidebar-item logout">
          <FaAt className="icon" />
          <span>Vijayaraj M</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
