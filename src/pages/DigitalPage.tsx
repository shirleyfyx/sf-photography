import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/DigitalPage.css';
import useFadeOut from '../components/useFadeOut'; 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WelcomeImage from '../assets/welcom_photo.jpg';

const DigitalPage: React.FC = () => {
  const { fadeOut } = useFadeOut('/sf-photography', 1000); 

  return (
    <motion.div
      className={`welcomepage ${fadeOut ? 'fade-out' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }} 
    >
      
      <Header />
      
      <Sidebar />
      
      <div className="content-container">
        
      </div>
    </motion.div>
  );
};

export default DigitalPage;
