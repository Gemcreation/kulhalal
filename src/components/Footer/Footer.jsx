/**
 * Footer Component
 * Application footer with copyright, links, and social icons.
 */
import React from 'react';
import { Share2, Globe } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h2 className="footer__logo">KulHalal</h2>
        <p className="footer__copyright">© 2024 KulHalal. Purity and Certainty in every bite.</p>
      </div>
      <div className="footer__center">
        <a href="#contact">Contact Us</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="footer__right">
        <button className="footer__icon-btn" aria-label="Share">
          <Share2 size={20} />
        </button>
        <button className="footer__icon-btn" aria-label="Language">
          <Globe size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
