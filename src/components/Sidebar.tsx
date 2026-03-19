import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css'; 

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the drawer when the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="sidebar-toggle-bar" />
        <span className="sidebar-toggle-bar" />
        <span className="sidebar-toggle-bar" />
      </button>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}

      <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Cover
            </Link>
          </li>
          <li>
            <NavLink
              to="/welcome"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/drone"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setIsOpen(false)}
            >
              Drone Albums
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/digital"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setIsOpen(false)}
            >
              iPhone Albums
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
