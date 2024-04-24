import React from 'react';
import { Link } from 'react-router-dom';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';

function NavigationBar() {
  return (
   

    <nav style={{ display: 'flex' }}>
      <Link to="/" style={{ flex: '1', backgroundColor: '#92C7CF', padding: '10px', textAlign: 'center' }}>Home</Link>
      <Link to="/AboutPage" style={{ flex: '1', backgroundColor: '#92C7CF', padding: '10px', textAlign: 'center' }}>About</Link>
      <Link to="/ContactPage" style={{ flex: '1', backgroundColor: '#92C7CF', padding: '10px', textAlign: 'center' }}>Contact</Link>
    </nav>
    
  );
}

export default NavigationBar;
