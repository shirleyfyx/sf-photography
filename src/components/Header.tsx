import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import '../styles/Header.css'; 

const Header: React.FC = () => {
  const navigate = useNavigate(); 

  const handleAboutMeNavigateToCover = () => {
    console.log("Navigating to cover (/).");
    navigate('/'); 
  };

  return (
    <>
      <header className="header">
        <div
          className="about-me about-me--desktop"
          onClick={handleAboutMeNavigateToCover}
        >
          about me
        </div>

        <nav className="header-nav" aria-label="Primary navigation">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'header-link header-link--active' : 'header-link')}
          >
            Cover
          </NavLink>
          <NavLink
            to="/welcome"
            className={({ isActive }) => (isActive ? 'header-link header-link--active' : 'header-link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/drone"
            className={({ isActive }) => (isActive ? 'header-link header-link--active' : 'header-link')}
          >
            Drone
          </NavLink>
          <NavLink
            to="/digital"
            className={({ isActive }) => (isActive ? 'header-link header-link--active' : 'header-link')}
          >
            iPhone
          </NavLink>
        </nav>
      </header>

      <div
        className="about-me-mobile"
        role="button"
        tabIndex={0}
        onClick={handleAboutMeNavigateToCover}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleAboutMeNavigateToCover();
        }}
      >
        about me
      </div>
    </>
  );
};

export default Header;
