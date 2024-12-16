import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/layouts/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('toggleMenu called');
    setIsOpen(!isOpen);
    console.log('isOpen:', !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className='nav-container'>
        <img src='Logo.svg' alt='Logo' className='logo'/>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to='/' onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to='#' onClick={closeMenu}>Menu</Link>
          </li>
          <li>
            <Link to='/booking' onClick={closeMenu}>Reservations</Link>
          </li>
          <li>
            <Link to='#' onClick={closeMenu}>Order Online</Link>
          </li>
          <li>
            <Link to='#' onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;