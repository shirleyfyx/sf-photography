import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/DigitalPage.css';
import useFadeOut from '../components/useFadeOut'; 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DigitalImage1 from '../assets/digital-photos/digital-photo1.jpg';
import DigitalImage2 from '../assets/digital-photos/digital-photo2.jpg';
import DigitalImage3 from '../assets/digital-photos/digital-photo3.jpg';
import DigitalImage4 from '../assets/digital-photos/digital-photo4.jpg';
import DigitalImage5 from '../assets/digital-photos/digital-photo5.jpg';
import DigitalImage6 from '../assets/digital-photos/digital-photo6.jpg';
import DigitalImage7 from '../assets/digital-photos/digital-photo7.jpg';
import DigitalImage8 from '../assets/digital-photos/digital-photo8.jpg';
import DigitalImage9 from '../assets/digital-photos/digital-photo9.jpg';
import DigitalImage10 from '../assets/digital-photos/digital-photo10.jpg';
import DigitalImage11 from '../assets/digital-photos/digital-photo11.jpg';
import DigitalImage12 from '../assets/digital-photos/digital-photo12.jpg';
import DigitalImage13 from '../assets/digital-photos/digital-photo13.jpg';
import DigitalImage14 from '../assets/digital-photos/digital-photo14.jpg';
import DigitalImage15 from '../assets/digital-photos/digital-photo15.jpg';
import DigitalImage16 from '../assets/digital-photos/digital-photo16.jpg';
import DigitalImage17 from '../assets/digital-photos/digital-photo17.jpg';
import DigitalImage18 from '../assets/digital-photos/digital-photo18.jpg';
import DigitalImage19 from '../assets/digital-photos/digital-photo19.jpg';
import DigitalImage20 from '../assets/digital-photos/digital-photo20.jpg';
import DigitalImage21 from '../assets/digital-photos/digital-photo21.jpg';
import DigitalImage22 from '../assets/digital-photos/digital-photo22.jpg';
import DigitalImage23 from '../assets/digital-photos/digital-photo23.jpg';
import DigitalImage24 from '../assets/digital-photos/digital-photo24.jpg';
import DigitalImage25 from '../assets/digital-photos/digital-photo25.jpg';
import DigitalImage26 from '../assets/digital-photos/digital-photo26.jpg';
import DigitalImage27 from '../assets/digital-photos/digital-photo27.jpg';
import DigitalImage28 from '../assets/digital-photos/digital-photo28.jpg';
import DigitalImage29 from '../assets/digital-photos/digital-photo29.jpg';
import DigitalImage30 from '../assets/digital-photos/digital-photo30.jpg';
import DigitalImage31 from '../assets/digital-photos/digital-photo31.jpg';
import DigitalImage32 from '../assets/digital-photos/digital-photo32.jpg';
import DigitalImage33 from '../assets/digital-photos/digital-photo33.jpg';
import DigitalImage34 from '../assets/digital-photos/digital-photo34.jpg';
import DigitalImage35 from '../assets/digital-photos/digital-photo35.jpg';
import DigitalImage36 from '../assets/digital-photos/digital-photo36.jpg';
import DigitalImage37 from '../assets/digital-photos/digital-photo37.jpg';
import DigitalImage38 from '../assets/digital-photos/digital-photo38.jpg';
import DigitalImage39 from '../assets/digital-photos/digital-photo39.jpg';
import DigitalImage40 from '../assets/digital-photos/digital-photo40.jpg';
import DigitalImage41 from '../assets/digital-photos/digital-photo41.jpg';
import DigitalImage42 from '../assets/digital-photos/digital-photo42.jpg';
import DigitalImage43 from '../assets/digital-photos/digital-photo43.jpg';
import DigitalImage44 from '../assets/digital-photos/digital-photo44.jpg';
import DigitalImage45 from '../assets/digital-photos/digital-photo45.jpg';
import DigitalImage46 from '../assets/digital-photos/digital-photo46.jpg';
import DigitalImage47 from '../assets/digital-photos/digital-photo47.jpg';
// import DigitalImage48 from '../assets/digital-photos/digital-photo48.jpg';
import DigitalImage49 from '../assets/digital-photos/digital-photo49.jpg';
import DigitalImage50 from '../assets/digital-photos/digital-photo50.jpg';
import DigitalImage51 from '../assets/digital-photos/digital-photo51.jpg';
import DigitalImage52 from '../assets/digital-photos/digital-photo52.jpg';

const DigitalPage: React.FC = () => {
  const { fadeOut } = useFadeOut('/sf-photography', 1000); 

  return (
    <motion.div
      className={`digitalpage ${fadeOut ? 'fade-out' : ''}`}
      initial={{ opacity: 0, scale: 0.99 }}   
      animate={{ opacity: 1, scale: 1 }}     
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}  
    >
      <Header />
      <Sidebar />
      
      <div className="image-container">

      <img src={DigitalImage1} alt="cat" className="digital-portrait-image" />
      <img src={DigitalImage3} alt="geese" className="digital-portrait-image" />
      <img src={DigitalImage2} alt="car" className="digital-portrait-image" />

      <img src={DigitalImage25} alt="pyramid" className="digital-portrait-image" />
      <img src={DigitalImage35} alt="temple" className="digital-portrait-image" />
      <img src={DigitalImage31} alt="statue" className="digital-portrait-image" />

      <img src={DigitalImage44} alt="band" className="digital-portrait-image" />
      <img src={DigitalImage4} alt="castle" className="digital-portrait-image" />
      <img src={DigitalImage39} alt="church" className="digital-portrait-image" />

      <img src={DigitalImage20} alt="sunset" className="digital-portrait-image" />
      <img src={DigitalImage41} alt="tower" className="digital-portrait-image" />
      <img src={DigitalImage38} alt="tree" className="digital-portrait-image" />

      <img src={DigitalImage40} alt="train-window" className="digital-portrait-image" />
      <img src={DigitalImage42} alt="crystalball" className="digital-portrait-image" />
      <img src={DigitalImage43} alt="summit" className="digital-portrait-image" />
            
      <img src={DigitalImage49} alt="man-with-sheep" className="digital-portrait-image" />
      <img src={DigitalImage52} alt="pavilion" className="digital-portrait-image" />
      <img src={DigitalImage51} alt="back" className="digital-portrait-image" />

      <img src={DigitalImage6} alt="vangogh" className="digital-portrait-image" />
      <img src={DigitalImage32} alt="restaurant" className="digital-portrait-image" />
      <img src={DigitalImage5} alt="building" className="digital-portrait-image" />

      <img src={DigitalImage11} alt="snail" className="digital-portrait-image" />
      <img src={DigitalImage12} alt="angry-goose" className="digital-portrait-image" />
      <img src={DigitalImage7} alt="hare" className="digital-portrait-image" />

      <img src={DigitalImage46} alt="paris" className="digital-portrait-image" />
      <img src={DigitalImage47} alt="bridge" className="digital-portrait-image" />
      <img src={DigitalImage45} alt="ceiling" className="digital-portrait-image" />
      
      <img src={DigitalImage8} alt="yellow-tree" className="digital-portrait-image" />
      <img src={DigitalImage9} alt="library" className="digital-portrait-image" />
      <img src={DigitalImage10} alt="red-tree" className="digital-portrait-image" />

      <img src={DigitalImage16} alt="afternoon" className="digital-portrait-image" />
      <img src={DigitalImage17} alt="morning" className="digital-portrait-image" />
      <img src={DigitalImage18} alt="night" className="digital-portrait-image" />

      <img src={DigitalImage36} alt="roofs1" className="digital-portrait-image" />
      <img src={DigitalImage34} alt="window" className="digital-portrait-image" />
      <img src={DigitalImage33} alt="roofs2" className="digital-portrait-image" />

      <img src={DigitalImage13} alt="plane1" className="digital-portrait-image" />
      <img src={DigitalImage14} alt="plane2" className="digital-portrait-image" />
      <img src={DigitalImage15} alt="plane3" className="digital-portrait-image" />

      <img src={DigitalImage30} alt="valley" className="digital-portrait-image" />
      <img src={DigitalImage29} alt="flower1" className="digital-portrait-image" />
      <img src={DigitalImage21} alt="aurora" className="digital-portrait-image" />

      <img src={DigitalImage22} alt="frog" className="digital-portrait-image" />
      <img src={DigitalImage28} alt="red-leaf" className="digital-portrait-image" />
      <img src={DigitalImage19} alt="dragon" className="digital-portrait-image" />

      <img src={DigitalImage24} alt="research-center1" className="digital-portrait-image" />
      <img src={DigitalImage27} alt="flower2" className="digital-portrait-image" />
      <img src={DigitalImage23} alt="research-center2" className="digital-portrait-image" />

      <img src={DigitalImage26} alt="sushi" className="digital-portrait-image" />
      <img src={DigitalImage37} alt="strawberries" className="digital-portrait-image" />
      <img src={DigitalImage50} alt="tomatoes" className="digital-portrait-image" />

      </div>
    </motion.div>
  );
};

export default DigitalPage;
