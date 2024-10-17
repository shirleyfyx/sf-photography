import React from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import '../styles/Sidebar.css'; 

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link
            to="/sf-photography/">
            Home
          </Link>
        </li>
        <li>
          <NavLink 
            to="/sf-photography/welcome" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sf-photography/drone" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Drone Albums
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sf-photography/digital" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Digital Albums
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
