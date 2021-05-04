import React from 'react';
import styles from './styles.module.css';

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav role="navigation">
      <div id={styles.menuToggle}>
        <input type="checkbox" onClick={() => setIsMenuOpen(!isMenuOpen)} />

        <span></span>
        <span></span>
        <span></span>

        <ul id={styles.menu}>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Our story</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
