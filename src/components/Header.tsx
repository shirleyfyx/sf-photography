import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Header.css'; 

const Header: React.FC = () => {
  const navigate = useNavigate(); 

  const handleAboutMeClick = () => {
    console.log("Navigating to the 'About Me' page.");
    navigate('/sf-photography'); 
  };

  return (
    <header className="header">
      <div className="about-me" onClick={handleAboutMeClick}>
        about me
      </div>
    </header>
  );
};

export default Header;
