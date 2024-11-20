import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* About Section */}
        <div className="footer__about">
          <h2 className="footer__logo">iWorld Tour</h2>
          <p>
            Discover amazing destinations with iWorld Tour. Your trusted travel 
            agency for unique and memorable experiences.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer__socials">
          <h3>Follow Us</h3>
          <div className="footer__icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} iWorld Tour. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
