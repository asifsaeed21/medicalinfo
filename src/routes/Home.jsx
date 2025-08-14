import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Welcome to Pakistan Medical Guide</h1>
        <p>Your comprehensive resource for healthcare information, medical facilities, and emergency services across Pakistan.</p>
        <div className={styles.cta}>
          <Link to="/facilities" className={styles.primaryBtn}>Find Medical Facilities</Link>
          <Link to="/emergency" className={styles.secondaryBtn}>Emergency Contacts</Link>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>🏥 Medical Facilities</h3>
          <p>Find hospitals, clinics, and healthcare centers near you with detailed information and contact details.</p>
          <Link to="/facilities">Explore Facilities →</Link>
        </div>

        <div className={styles.feature}>
          <h3>🩺 Common Diseases</h3>
          <p>Learn about prevalent health conditions, symptoms, and preventive measures for better health awareness.</p>
          <Link to="/diseases">Learn More →</Link>
        </div>

        <div className={styles.feature}>
          <h3>🚨 Emergency Services</h3>
          <p>Quick access to emergency numbers, first aid information, and critical healthcare resources.</p>
          <Link to="/emergency">Emergency Info →</Link>
        </div>

        <div className={styles.feature}>
          <h3>❓ FAQ</h3>
          <p>Find answers to frequently asked questions about healthcare services and medical information.</p>
          <Link to="/faq">View FAQ →</Link>
        </div>
      </div>

      <div className={styles.info}>
        <h2>About This Guide</h2>
        <p>Pakistan Medical Guide is designed to provide accessible healthcare information to citizens across Pakistan. We aim to bridge the gap between healthcare providers and patients by offering comprehensive, up-to-date medical information and resources.</p>
        <p><strong>Note:</strong> This information is for educational purposes only. Always consult qualified healthcare professionals for medical advice and treatment.</p>
      </div>
    </div>
  );
}
