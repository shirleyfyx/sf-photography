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
import DroneImage7 from '../assets/drone-photo7.jpg';
import DroneImage8 from '../assets/drone-photo8.jpg';
import DroneImage9 from '../assets/drone-photo9.jpg';
import DroneImage10 from '../assets/drone-photo10.jpg';
import DroneImage11 from '../assets/drone-photo11.jpg';
import DroneImage12 from '../assets/drone-photo12.jpg';
import DroneImage13 from '../assets/drone-photo13.jpg';
import DroneImage14 from '../assets/drone-photo14.jpg';

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
        <img src={DroneImage1} alt="pagoda" className="drone-image" />
        <p className='details'>
          - Yangzhou, China, 2023
        </p>
        <img src={DroneImage2} alt="traditional-street1" className="portrait-image" />
        <img src={DroneImage3} alt="traditional-street2" className="portrait-image" />
        <img src={DroneImage4} alt="traditional-street3" className="portrait-image" />
        <img src={DroneImage5} alt="traditional-street4" className="portrait-image" />
        <img src={DroneImage6} alt="traditional-street5" className="drone-image" />
        <p className='details'>
          - Quanzhou, China, 2024
        </p>
        <img src={DroneImage7} alt="Canada-fall-view1" className="drone-image" />
        <img src={DroneImage8} alt="Canada-fall-view2" className="drone-image" />
        <p className='details'>
          - Waterloo, Canada, 2024
        </p>
        <img src={DroneImage9} alt="UWaterloo-night-view" className="drone-image" />
        <p className='details'>
          - University of Waterloo, Canada, 2023
        </p>
        <img src={DroneImage10} alt="villa" className="drone-image" />
        <img src={DroneImage11} alt="museum" className="drone-image" />
        <img src={DroneImage12} alt="corssroad" className="drone-image" />
        <img src={DroneImage13} alt="history-now" className="portrait-image" />
        <img src={DroneImage14} alt="only-now" className="portrait-image" />
        <p className='details'>
          - Nanjing, China, 2023
        </p>

      </div>


      
    </motion.div>
  );
};

export default DronePage;
