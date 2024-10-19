import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/WelcomePage.css';
import useFadeOut from '../components/useFadeOut'; 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WelcomeImage from '../assets/welcom_photo.jpg';

const WelcomePage: React.FC = () => {
  const { fadeOut } = useFadeOut('/sf-photography', 1000); 

  return (
    <motion.div
      className={`welcomepage ${fadeOut ? 'fade-out' : ''}`}
      initial={{ opacity: 0, scale: 0.99 }}   
      animate={{ opacity: 1, scale: 1 }}     
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}    
    >
      
      <Header />
      
      <Sidebar />
      
      <div className="content-container">
        <img src={WelcomeImage} alt="welcome-image" className="welcome-image" loading="lazy"/>
        <h1>Welcome to Shirley's Photography Galleries!</h1>
        <p>
          Explore my collection of drone and digital albums,<br />
          capturing stunning landscapes across North America, Europe, Asia, and Africa.<br />
          Through my lens, I find joy in documenting the world as I see it,<br />
          preserving these moment as a lasting memory.<br />
          <br />All photos are unedited to showcase their most authentic, natural view.<br />
          I hope you enjoy this visual journey!
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomePage;
