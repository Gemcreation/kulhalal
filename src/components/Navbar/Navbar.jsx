
//  Navbar Component
//  Navigation header with logo, main links, and sign-in button though without proper function.

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">KulHalal</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/scan" className={({ isActive }) => isActive ? "active" : ""}>Scan Product</NavLink>
        </li>
        <li>
          <NavLink to="/knowledge-base" className={({ isActive }) => isActive ? "active" : ""}>Knowledge Base</NavLink>
        </li>
      </ul>
      <div className="navbar__actions">
        <button className="navbar__btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
