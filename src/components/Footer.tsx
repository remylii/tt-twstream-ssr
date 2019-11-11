import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="footer">
    <hr />
    <Link to="/">Home</Link>,
    <a href="https://google.com/" target="_blank" rel="noopener noreferrer">Google</a>
  </footer>
);

export default Footer;
