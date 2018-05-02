import React from 'react';
import './Header.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <ul>
     <li><a href="#" className="navbar-brand">Galvanize BreweryDB</a></li>
   </ul>
   <ul>
    <li className="nav-item"><a href="#" className="nav-link">Map</a></li>
   </ul> 
  </nav>
);

export default Header;