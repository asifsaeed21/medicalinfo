import React from 'react';
import styles from './WomenHealth.module.css';

const WOMEN_HEALTH_DATA = [
  {
    id: 1,
    title: "Prenatal Care",
    description: "Essential healthcare during pregnancy to ensure the health of both mother and baby.",
    topics: [
      "Regular prenatal check-ups",
      "Nutrition and supplements",
      "Exercise during pregnancy",
      "Warning signs to watch for"
    ],
    icon: "🤱"
  },
  {
    id: 2,
    title: "Reproductive Health",
    description: "Comprehensive care for women's reproductive system and family planning.",
    topics: [
      "Family planning methods",
      "Regular gynecological exams",
      "STI prevention and testing",
      "Menstrual health"
    ],
    icon: "🌸"
  },
  {
    id: 3,
    title: "Breast Health",
    description: "Preventive care and early detection for breast health and cancer screening.",
    topics: [
      "Breast self-examinations",
      "Mammogram guidelines",
      "Risk factors awareness",
      "Early detection importance"
    ],
    icon: "💝"
  },
  {
    id: 4,
    title: "Mental Health",
    description: "Supporting women's mental and emotional well-being through all life stages.",
    topics: [
      "Postpartum depression",
      "Stress management",
      "Work-life balance",
      "Seeking professional help"
    ],
    icon: "🧠"
  },
  {
    id: 5,
    title: "Menopause & Aging",
    description: "Understanding and managing health changes during menopause and beyond.",
    topics: [
      "Hormone changes",
      "Bone health management",
      "Heart health awareness",
      "Quality of life maintenance"
    ],
    icon: "🌺"
  },
  {
    id: 6,
    title: "Nutrition & Wellness",
    description: "Optimal nutrition and lifestyle choices for women's health and vitality.",
    topics: [
      "Balanced diet planning",
      "Vitamin and mineral needs",
      "Hydration importance",
      "Physical activity guidelines"
    ],
    icon: "🥗"
  },
  {
    id: 7,
    title: "Safe Health",
    description: "Comprehensive safe health education and preventive care for women.",
    topics: [
      "Safe health practices",
      "Contraception options",
      "Health wellness",
      "Communication skills"
    ],
    icon: "💕"
  }
];

const HEALTH_TIPS = [
  "Schedule regular check-ups with your healthcare provider",
  "Maintain a balanced diet rich in fruits, vegetables, and whole grains",
  "Exercise regularly with activities you enjoy",
  "Get adequate sleep and manage stress levels",
  "Stay hydrated and limit alcohol consumption",
  "Practice safe health and get regular STI screenings",
  "Know your family medical history",
  "Don't ignore unusual symptoms - seek medical advice"
];

export default function WomenHealth() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Women's Health</h1>
        <p>Comprehensive healthcare information and resources for women of all ages</p>
      </div>

      <div className={styles.healthTopics}>
        <h2>Health Topics</h2>
        <div className={styles.topicsGrid}>
          {WOMEN_HEALTH_DATA.map(topic => (
            <div key={topic.id} className={styles.topicCard}>
              <div className={styles.topicIcon}>{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <ul className={styles.chips}>
                {topic.topics.map((item, index) => (
                  <li key={index} className={`${styles.chip} ${index % 2 === 1 ? styles.chipSuccess : ''}`}>{item}</li>
                ))}
              </ul>
              <button className={styles.learnMoreBtn}>Learn More</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.healthTips}>
        <h2>General Health Tips</h2>
        <div className={styles.tipsList}>
          {HEALTH_TIPS.map((tip, index) => (
            <div key={index} className={styles.tipItem}>
              <span className={styles.tipNumber}>{index + 1}</span>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.resources}>
        <h2>Additional Resources</h2>
        <div className={styles.resourcesGrid}>
          <div className={styles.resourceCard}>
            <div>
              <h3>🏥 Find Women's Health Specialists</h3>
              <p>Locate gynecologists, obstetricians, and women's health clinics in your area. Get expert care from qualified healthcare professionals.</p>
            </div>
            <button className={styles.resourceBtn}>Search Specialists</button>
          </div>
          
          <div className={styles.resourceCard}>
            <div>
              <h3>📚 Educational Materials</h3>
              <p>Access reliable, evidence-based information about women's health topics, concerns, and preventive care guidelines.</p>
            </div>
            <button className={styles.resourceBtn}>Browse Resources</button>
          </div>
          
          <div className={styles.resourceCard}>
            <div>
              <h3>📞 Support Hotlines</h3>
              <p>Get confidential support, counseling, and information about women's health issues from trained professionals.</p>
            </div>
            <button className={styles.resourceBtn}>Contact Support</button>
          </div>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <h3>⚠️ Important Notice</h3>
        <p>This information is for educational purposes only. Always consult with qualified healthcare professionals for personalized medical advice and treatment. Your health is important - don't hesitate to seek professional care when needed.</p>
      </div>
    </div>
  );
}
