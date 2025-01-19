import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/upload">Upload Document</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;