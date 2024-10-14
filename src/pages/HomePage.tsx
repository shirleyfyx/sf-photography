import React from 'react';
import '../styles/HomePage.css';
import useFadeOut from '../components/useFadeOut';

const HomePage: React.FC = () => {
  const { fadeOut, triggerFadeOut } = useFadeOut('/', 1000); 

  return (
    <div className={`homepage ${fadeOut ? 'fade-out' : ''}`}>
      <header className="header">
        <div className="back-arrow" onClick={triggerFadeOut}>
          ←
        </div>
      </header>
    </div>
  );
};

export default HomePage;
