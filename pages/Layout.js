import React, { useState } from 'react';
import '../scss/Layout.scss';
import { Outlet, Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../Assets/brand.png';
import { useRef } from 'react';
import {
  FaBars,
  FaTimes,
  FaRegUser,
  FaShoppingCart,
  FaSearch,
} from 'react-icons/fa';
import { Container } from 'react-bootstrap';

function Layout() {
  const navRef = useRef();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const showNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to close navbar when link is clicked
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      <Container>
        <header>
        <Link to="/" onClick={closeNavbar}>
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <nav ref={navRef} className={isNavbarOpen ? 'responsive_nav' : ''}>
            <Link to="/" onClick={closeNavbar}>Home</Link>
            <Link to="/product" onClick={closeNavbar}>Products</Link>
            <Link to="/contact" onClick={closeNavbar}>Contact</Link>
            <div className="icons-container">
              <FaShoppingCart className="icon" />
              <FaSearch className="icon" />
              <FaRegUser className="icon" />
            </div>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}
              aria-label="Close Navbar"
            >
              <FaTimes />
            </button>
          </nav>
          <button
            className="nav-btn"
            onClick={showNavbar}
            aria-label="Toggle Navbar"
          >
            <FaBars />
          </button>
        </header>
      </Container>
      <div className={isNavbarOpen ? 'overlay' : ''}></div>
      <Outlet />
    </>
  );
}

export default Layout;
