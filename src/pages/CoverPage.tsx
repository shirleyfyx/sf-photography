import React, { useState } from 'react';
import '../styles/CoverPage.css';
import { useNavigate } from 'react-router-dom';

const CoverPage: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleEnterClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home'); 
    }, 500); 
  };

  return (
    <div className={`coverpage ${fadeOut ? 'fade-out' : ''}`}>
      <h1 className="title">Shirley Fang</h1>
      <div className="enter" onClick={handleEnterClick}>
        Enter <span className="arrow">→</span>
      </div>
    </div>
  );
};

export default CoverPage;
