'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          MyPortfolio
        </Link>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
