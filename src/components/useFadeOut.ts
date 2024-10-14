import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook to handle fade-out animation and navigation.
 * @param {string} targetPath - The path to navigate to after the fade-out.
 * @param {number} delay - The duration of the fade-out animation (in milliseconds).
 */
const useFadeOut = (targetPath: string, delay: number = 1000) => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const triggerFadeOut = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate(targetPath); // Navigate to the target path after the animation
    }, delay);
  };

  return { fadeOut, triggerFadeOut };
};

export default useFadeOut;
