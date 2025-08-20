import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ_DATA = [
  {
    id: 1,
    question: "What is the emergency number in Pakistan?",
    answer: "The main emergency number in Pakistan is 1122. This number connects you to emergency services including medical, fire, and police assistance. Call this number immediately in any emergency situation."
  },
  {
    id: 2,
    question: "How can I find the nearest hospital?",
    answer: "You can use our Facilities page to search for hospitals, clinics, and healthcare centers by city, type, or name. The search will show you detailed information including contact details, operating hours, and patient ratings to help you make informed decisions."
  },
  {
    id: 3,
    question: "What should I do in a medical emergency?",
    answer: "In a medical emergency: 1) Call 1122 immediately, 2) Stay calm and assess the situation, 3) Provide first aid if you're trained, 4) Keep the person comfortable until help arrives, 5) Never move someone with a suspected spinal injury, 6) Follow the dispatcher's instructions carefully."
  },
  {
    id: 4,
    question: "Is this information reliable for medical treatment?",
    answer: "This guide provides educational information only. For actual medical treatment, always consult qualified healthcare professionals. The information here is meant to increase awareness and provide basic guidance, but should never replace professional medical advice."
  },
  {
    id: 5,
    question: "How often is the medical information updated?",
    answer: "We strive to keep all information current and accurate. However, medical information can change rapidly, so we recommend cross-referencing with official sources and healthcare providers for the most up-to-date information. We update our content regularly based on the latest medical guidelines."
  },
  {
    id: 6,
    question: "Can I get medical advice through this website?",
    answer: "No, this website does not provide medical advice. It's an informational resource only. For medical advice, diagnosis, or treatment, please consult with qualified healthcare professionals or visit a medical facility. This site is designed to educate and inform, not to diagnose or treat medical conditions."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about healthcare services and medical information in Pakistan</p>
      </div>

      <div className={styles.faqList}>
        {FAQ_DATA.map((faq, idx) => (
          <div key={faq.id} className={styles.faqItem} style={{animationDelay: `${idx * 80}ms`}}>
            <button
              className={`${styles.question} ${openItems.has(faq.id) ? styles.open : ''}`}
              onClick={() => toggleItem(faq.id)}
              aria-expanded={openItems.has(faq.id)}
              aria-label={`${openItems.has(faq.id) ? 'Collapse' : 'Expand'} answer for: ${faq.question}`}
            >
              <span>{faq.question}</span>
              <span className={styles.icon} aria-hidden="true">
                {openItems.has(faq.id) ? '\u2212' : '+'}
              </span>
            </button>
            
            {openItems.has(faq.id) && (
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.contactInfo} style={{animationDelay: `${FAQ_DATA.length * 80}ms`}}>
        <h2>Still Have Questions?</h2>
        <p>If you couldn't find the answer you're looking for, please don't hesitate to contact us directly:</p>
        <div className={styles.contactOptions}>
          <div className={styles.contactOption}>
            <h3>📧 Email</h3>
            <a 
              href="mailto:asif.saeed78650@gmail.com?subject=Question%20from%20Pakistan%20Medical%20Guide"
              className={styles.contactLink}
            >
              asif.saeed78650@gmail.com
            </a>
          </div>
          <div className={styles.contactOption}>
            <h3>📞 Phone</h3>
            <a 
              href="tel:+92335570733"
              className={styles.contactLink}
            >
              +92-335-570733
            </a>
          </div>
          <div className={styles.contactOption}>
            <h3>🏥 Emergency</h3>
            <p>For medical emergencies, call <a href="tel:1122" className={styles.contactLink}>1122</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
