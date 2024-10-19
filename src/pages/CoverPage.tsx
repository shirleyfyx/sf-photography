import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/CoverPage.css';
import useFadeOut from '../components/useFadeOut'; 

const CoverPage: React.FC = () => {
  const { fadeOut, triggerFadeOut } = useFadeOut('/welcome', 1000);

  return (
    <motion.div
      className={`coverpage ${fadeOut ? 'fade-out' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} 
    >
      <h1 className="title">Shirley Fang</h1>
      <div className="enter" onClick={triggerFadeOut}>
        Enter <span className="arrow">→</span>
      </div>

    </motion.div>
  );
};

export default CoverPage;
