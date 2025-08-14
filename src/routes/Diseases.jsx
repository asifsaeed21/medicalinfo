import React, { useState } from 'react';
import styles from './Diseases.module.css';

const DISEASES_DATA = [
  {
    id: 1,
    name: "Diabetes",
    category: "Chronic Disease",
    symptoms: ["Frequent urination", "Excessive thirst", "Increased hunger", "Weight loss", "Fatigue"],
    prevention: ["Maintain healthy weight", "Regular exercise", "Balanced diet", "Regular check-ups"],
    description: "Diabetes is a chronic disease that affects how your body turns food into energy."
  },
  {
    id: 2,
    name: "Hypertension",
    category: "Cardiovascular",
    symptoms: ["Headaches", "Shortness of breath", "Nosebleeds", "Chest pain", "Dizziness"],
    prevention: ["Reduce salt intake", "Regular exercise", "Maintain healthy weight", "Limit alcohol"],
    description: "High blood pressure that can lead to serious health problems if left untreated."
  },
  {
    id: 3,
    name: "Respiratory Infections",
    category: "Infectious Disease",
    symptoms: ["Cough", "Fever", "Sore throat", "Runny nose", "Difficulty breathing"],
    prevention: ["Good hygiene", "Avoid close contact with sick people", "Vaccination", "Healthy lifestyle"],
    description: "Common infections affecting the respiratory system, especially during seasonal changes."
  },
  {
    id: 4,
    name: "Gastroenteritis",
    category: "Digestive",
    symptoms: ["Diarrhea", "Vomiting", "Stomach cramps", "Fever", "Dehydration"],
    prevention: ["Clean water", "Proper food handling", "Good hygiene", "Vaccination"],
    description: "Inflammation of the stomach and intestines, often caused by viral or bacterial infection."
  },
  {
    id: 5,
    name: "Heart Disease",
    category: "Cardiovascular",
    symptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Irregular heartbeat", "Swelling in legs"],
    prevention: ["Healthy diet", "Regular exercise", "No smoking", "Manage stress", "Regular check-ups"],
    description: "Various conditions affecting the heart and blood vessels, a leading cause of death worldwide."
  },
  {
    id: 6,
    name: "Asthma",
    category: "Respiratory",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Difficulty breathing"],
    prevention: ["Avoid triggers", "Regular medication", "Clean environment", "Regular check-ups"],
    description: "Chronic respiratory condition causing inflammation and narrowing of airways."
  },
  {
    id: 7,
    name: "Obesity",
    category: "Lifestyle Disease",
    symptoms: ["Excess body fat", "Difficulty breathing", "Joint pain", "Fatigue", "Sleep problems"],
    prevention: ["Balanced diet", "Regular exercise", "Portion control", "Healthy lifestyle choices"],
    description: "Medical condition characterized by excessive body fat that can lead to serious health issues."
  },
  {
    id: 8,
    name: "Depression",
    category: "Mental Health",
    symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep changes", "Difficulty concentrating"],
    prevention: ["Regular exercise", "Social connections", "Stress management", "Professional help when needed"],
    description: "Mental health disorder characterized by persistent feelings of sadness and loss of interest."
  },
  {
    id: 9,
    name: "Arthritis",
    category: "Musculoskeletal",
    symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion", "Fatigue"],
    prevention: ["Regular exercise", "Healthy weight", "Joint protection", "Proper posture"],
    description: "Inflammation of joints causing pain and stiffness, affecting millions of people worldwide."
  },
  {
    id: 10,
    name: "Cancer",
    category: "Oncology",
    symptoms: ["Unexplained weight loss", "Fatigue", "Pain", "Skin changes", "Lumps"],
    prevention: ["Healthy lifestyle", "Regular screenings", "Avoid tobacco", "Protect from sun", "Vaccination"],
    description: "Group of diseases characterized by uncontrolled cell growth that can spread to other parts of the body."
  },
  {
    id: 11,
    name: "Kidney Disease",
    category: "Urological",
    symptoms: ["Fatigue", "Swelling", "Changes in urination", "Nausea", "Shortness of breath"],
    prevention: ["Control blood pressure", "Manage diabetes", "Healthy diet", "Regular exercise", "Avoid smoking"],
    description: "Condition where kidneys lose their ability to filter waste and excess fluid from the blood."
  },
  {
    id: 12,
    name: "Liver Disease",
    category: "Hepatology",
    symptoms: ["Jaundice", "Abdominal pain", "Fatigue", "Nausea", "Loss of appetite"],
    prevention: ["Limit alcohol", "Healthy diet", "Vaccination", "Avoid risky behaviors", "Regular check-ups"],
    description: "Various conditions affecting the liver's ability to function properly."
  },
  {
    id: 13,
    name: "Stroke",
    category: "Neurological",
    symptoms: ["Sudden numbness", "Confusion", "Difficulty speaking", "Vision problems", "Severe headache"],
    prevention: ["Control blood pressure", "Healthy diet", "Regular exercise", "No smoking", "Manage diabetes"],
    description: "Medical emergency caused by interrupted blood flow to the brain."
  },
  {
    id: 14,
    name: "Tuberculosis",
    category: "Infectious Disease",
    symptoms: ["Persistent cough", "Chest pain", "Coughing up blood", "Fatigue", "Night sweats"],
    prevention: ["Vaccination", "Good ventilation", "Avoid close contact", "Regular testing", "Healthy lifestyle"],
    description: "Bacterial infection that primarily affects the lungs but can spread to other organs."
  }
];

const CATEGORIES = ['All', ...Array.from(new Set(DISEASES_DATA.map(d => d.category)))];

export default function Diseases() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDiseases = DISEASES_DATA.filter(disease => {
    const matchesCategory = selectedCategory === 'All' || disease.category === selectedCategory;
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Common Diseases</h1>
        <p>Learn about prevalent health conditions, symptoms, and preventive measures</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search diseases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.selectContainer}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.categorySelect}
          >
            {CATEGORIES.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.diseasesGrid}>
        {filteredDiseases.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No diseases found matching your criteria.</p>
          </div>
        ) : (
          filteredDiseases.map(disease => (
            <div key={disease.id} className={styles.diseaseCard}>
              <div className={styles.diseaseHeader}>
                <h3>{disease.name}</h3>
                <span className={styles.category}>{disease.category}</span>
              </div>
              
              <p className={styles.description}>{disease.description}</p>
              
              <div className={styles.diseaseContent}>
                <div className={styles.symptomsSection}>
                  <h4>Common Symptoms:</h4>
                  <ul>
                    {disease.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.preventionSection}>
                  <h4>Prevention:</h4>
                  <ul>
                    {disease.prevention.map((prevention, index) => (
                      <li key={index}>{prevention}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={styles.actions}>
                <button className={styles.learnMoreBtn}>Learn More</button>
                <button className={styles.consultBtn}>Consult Doctor</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.disclaimer}>
        <h3>⚠️ Medical Disclaimer</h3>
        <p>This information is for educational purposes only and should not replace professional medical advice. Always consult with healthcare professionals for proper diagnosis and treatment.</p>
      </div>
    </div>
  );
}
