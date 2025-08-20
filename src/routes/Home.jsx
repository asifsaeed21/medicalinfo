import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Pakistan Medical Guide</h1>
        <p>Find trusted healthcare info, nearby facilities, and emergency help — fast and easy.</p>
        <div className={styles.cta}>
          <Link to="/facilities" className={styles.primaryBtn}>Find Medical Facilities</Link>
          <Link to="/emergency" className={styles.secondaryBtn}>Emergency Contacts</Link>
        </div>
        <div className={styles.badges}>
          <span className={styles.badge}>✅ Verified sources</span>
          <span className={styles.badge}>🌍 Nationwide coverage</span>
          <span className={styles.badge}>💡 Always free</span>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>🏥 Medical Facilities</h3>
          <p>Hospitals and clinics with contacts and directions.</p>
          <Link to="/facilities">Explore Facilities →</Link>
        </div>

        <div className={styles.feature}>
          <h3>🩺 Common Diseases</h3>
          <p>Symptoms, prevention, and when to see a doctor.</p>
          <Link to="/diseases">Learn More →</Link>
        </div>

        <div className={styles.feature}>
          <h3>🚨 Emergency Services</h3>
          <p>Hotlines, first‑aid tips, and urgent care info.</p>
          <Link to="/emergency">Emergency Info →</Link>
        </div>

        <div className={styles.feature}>
          <h3>❓ FAQ</h3>
          <p>Quick answers to common healthcare questions.</p>
          <Link to="/faq">View FAQ →</Link>
        </div>
      </div>

      <div className={styles.info}>
        <h2>About This Guide</h2>
        <p>Pakistan Medical Guide helps citizens access reliable healthcare information and resources in a simple, friendly way.</p>
        <p><strong>Note:</strong> For medical advice and treatment, always consult qualified healthcare professionals.</p>
      </div>
    </div>
  );
}
