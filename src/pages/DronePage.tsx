import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/DronePage.css';
import useFadeOut from '../components/useFadeOut'; 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DroneImage1 from '../assets/drone-photo1.jpg';
import DroneImage2 from '../assets/drone-photo2.jpg';
import DroneImage3 from '../assets/drone-photo3.jpg';
import DroneImage4 from '../assets/drone-photo4.jpg';
import DroneImage5 from '../assets/drone-photo5.jpg';
import DroneImage6 from '../assets/drone-photo6.jpg';

const DronePage: React.FC = () => {
  const { fadeOut } = useFadeOut('/sf-photography', 1000); 

  return (
    <motion.div
      className={`dronepage ${fadeOut ? 'fade-out' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }} 
    >
      
      <Header />
      <Sidebar />
      <div className="image-container">
        <img src={DroneImage1} alt="Drone-image1" className="drone-image" />
        <p className='details'>
          -Yangzhou, China, 2023
        </p>
        <img src={DroneImage2} alt="Drone-image2" className="portrait-image" />
        <img src={DroneImage3} alt="Drone-image3" className="portrait-image" />
        <img src={DroneImage4} alt="Drone-image4" className="portrait-image" />
        <img src={DroneImage5} alt="Drone-image5" className="portrait-image" />
        <img src={DroneImage6} alt="Drone-image6" className="drone-image" />
        <p className='details'>
          -Quanzhou, China, 2023
        </p>

      </div>


      
    </motion.div>
  );
};

export default DronePage;
