import React from 'react';
import '../styles/CoverPage.css';
import useFadeOut from '../components/useFadeOut';

const CoverPage: React.FC = () => {
  const { fadeOut, triggerFadeOut } = useFadeOut('/home', 1000);

  return (
    <div className={`coverpage ${fadeOut ? 'fade-out' : ''}`}>
      <h1 className="title">Shirley Fang</h1>
      <div className="enter" onClick={triggerFadeOut}>
        Enter <span className="arrow">→</span>
      </div>
    </div>
  );
};

export default CoverPage;
