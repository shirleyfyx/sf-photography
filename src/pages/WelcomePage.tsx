import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/WelcomePage.css';
import useFadeOut from '../components/useFadeOut'; 
import Sidebar from '../components/Sidebar';
import WelcomeImage from '../assets/welcom_photo.jpg';

const WelcomePage: React.FC = () => {
  const { fadeOut, triggerFadeOut } = useFadeOut('/sf-photography', 1000); 

  return (
    <motion.div
      className={`welcomepage ${fadeOut ? 'fade-out' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }} 
    >
      
      <header className="header">
        <div className="about-me" onClick={()=>
          {console.log("The about-me button has been clicked, return to the home page.")
          triggerFadeOut()}
        }>
          about me
        </div>
      </header>
      
      <Sidebar />
      
      <div className="image-container">
        <img src={WelcomeImage} alt="welcome-image" className="welcome-image" />
        <h1>Welcome to Shirley's Photography Galleries!</h1>
        <p>
          Explore my collection of drone and digital albums,<br />
          showcasing stunning landscapes from North America, Europe, Asia, and Africa.<br />
          Thorugh my lens, I find joy in documenting the world I see,<br />
          preserving these moments as lasting memories.<br />
          <br />All photos remain unedited to present the most authentic, original view.<br />
          I hope you enjoy this visual journey!<br /><br />
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomePage;
