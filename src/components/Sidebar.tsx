import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Sidebar.css'; 

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/sf-photography/">Home</Link> 
        </li>
        <li>
          <Link to="/sf-photography/welcome">Welcome</Link> 
        </li>
        <li>
          <Link to="/sf-photography/drone">Drone Albums</Link> 
        </li>
        <li>
          <Link to="/sf-photography/digital">Digital Albums</Link> 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
