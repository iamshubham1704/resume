import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Shubham Solanki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
