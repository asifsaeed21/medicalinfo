import React from 'react';
import styles from './Footer.module.css';

export default function Footer({ show = true }) {
  return (
    <footer className={`${styles.wrap} ${!show ? styles.hidden : ''}`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Pakistan Medical Guide</h3>
            <p>Your trusted source for medical information and healthcare resources in Pakistan.</p>
          </div>
          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/facilities">Medical Facilities</a></li>
              <li><a href="/diseases">Common Diseases</a></li>
              <li><a href="/emergency">Emergency Contacts</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4>Contact</h4>
            <p>For medical emergencies, call <a href="tel:1122" className={styles.contactLink}>1122</a></p>
            <p>Email: <a 
              href="mailto:asif.saeed78650@gmail.com?subject=Question%20from%20Pakistan%20Medical%20Guide"
              className={styles.contactLink}
            >asif.saeed78650@gmail.com</a></p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 Pakistan Medical Guide. All rights reserved.</p>
          <p>This information is for educational purposes only. Always consult healthcare professionals for medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
