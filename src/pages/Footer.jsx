import React from 'react';
import '../css/footer.css';
import { FaDiscord, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://discord.com/users/your-discord-id" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/your-instagram/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/9940506466290" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <p className="copyright">© 2025 Ferit. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
