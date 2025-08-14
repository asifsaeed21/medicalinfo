import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/diseases', label: 'Diseases' },
  { to: '/women', label: 'Women Health' },
  { to: '/viral', label: 'Viral Infections' },
  { to: '/first-aid', label: 'First Aid' },
  { to: '/emergency', label: 'Emergency' },
  { to: '/faq', label: 'FAQ' },
];

export default function Header({ show = true }) {
  return (
    <header className={`${styles.wrap} ${!show ? styles.hidden : ''}`}>
      <div className={styles.inner}>
        <div className={styles.brand} aria-label="Site title">Pakistan Medical Guide</div>
        <nav aria-label="Main navigation" className={styles.nav}>
          {NAV.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
