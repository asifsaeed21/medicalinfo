import React, { useState } from 'react';
import styles from './ViralInfections.module.css';

const VIRAL_INFECTIONS = [
  {
    id: 1,
    name: "COVID-19",
    severity: "High",
    symptoms: ["Fever", "Cough", "Fatigue", "Loss of taste/smell", "Shortness of breath"],
    prevention: ["Vaccination", "Mask wearing", "Social distancing", "Hand hygiene", "Ventilation"],
    treatment: "Rest, hydration, over-the-counter medications. Seek medical care for severe symptoms.",
    icon: "🦠"
  },
  {
    id: 2,
    name: "Dengue Fever",
    severity: "High",
    symptoms: ["High fever", "Severe headache", "Joint pain", "Rash", "Bleeding"],
    prevention: ["Mosquito control", "Use repellents", "Wear protective clothing", "Eliminate standing water"],
    treatment: "Supportive care, hydration, pain management. Hospital care for severe cases.",
    icon: "🦟"
  },
  {
    id: 3,
    name: "Chikungunya",
    severity: "Medium",
    symptoms: ["High fever", "Severe joint pain", "Headache", "Muscle pain", "Rash"],
    prevention: ["Mosquito control", "Use repellents", "Wear long sleeves", "Use mosquito nets"],
    treatment: "Rest, pain relief, hydration. Joint pain may persist for months.",
    icon: "🦟"
  },
  {
    id: 4,
    name: "Hepatitis A",
    severity: "Medium",
    symptoms: ["Jaundice", "Fatigue", "Abdominal pain", "Dark urine", "Loss of appetite"],
    prevention: ["Vaccination", "Safe food/water", "Good hygiene", "Avoid raw seafood"],
    treatment: "Rest, proper nutrition, supportive care. Usually resolves on its own.",
    icon: "🩺"
  },
  {
    id: 5,
    name: "Hepatitis B",
    severity: "High",
    symptoms: ["Jaundice", "Fatigue", "Abdominal pain", "Dark urine", "Nausea"],
    prevention: ["Vaccination", "Safe sex practices", "Avoid sharing needles", "Blood safety"],
    treatment: "Antiviral medications, regular monitoring, lifestyle changes.",
    icon: "🩺"
  },
  {
    id: 6,
    name: "Influenza (Flu)",
    severity: "Medium",
    symptoms: ["Fever", "Body aches", "Headache", "Sore throat", "Runny nose"],
    prevention: ["Annual flu shot", "Good hygiene", "Avoid close contact", "Stay home when sick"],
    treatment: "Rest, fluids, fever reducers. Antiviral medications if prescribed early.",
    icon: "🤧"
  },
  {
    id: 7,
    name: "Chickenpox",
    severity: "Low",
    symptoms: ["Itchy rash", "Fever", "Fatigue", "Loss of appetite", "Headache"],
    prevention: ["Vaccination", "Avoid contact with infected persons", "Good hygiene"],
    treatment: "Calamine lotion, antihistamines, pain relief. Keep nails short.",
    icon: "🦠"
  },
  {
    id: 8,
    name: "Measles",
    severity: "High",
    symptoms: ["High fever", "Rash", "Cough", "Runny nose", "Red eyes"],
    prevention: ["MMR vaccination", "Avoid contact with infected persons", "Good hygiene"],
    treatment: "Supportive care, rest, hydration. Vitamin A supplements may help.",
    icon: "🦠"
  }
];

const PREVENTION_TIPS = [
  "Get vaccinated against preventable viral infections",
  "Practice good hand hygiene - wash hands frequently",
  "Cover your mouth and nose when coughing or sneezing",
  "Avoid close contact with sick individuals",
  "Maintain a healthy lifestyle with proper nutrition and exercise",
  "Keep your living spaces clean and well-ventilated",
  "Use insect repellents in areas with mosquito-borne diseases",
  "Stay informed about local health advisories"
];

const LEARN_MORE_LINKS = {
  'COVID-19': 'https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/treating-covid-19-at-home/art-20483273',
  'Dengue Fever': 'https://dndi.org/diseases/dengue/facts/?gad_source=1&gad_campaignid=17059181031&gbraid=0AAAAABxzi7LmSvG-m0SxbQTFWv69s6zWg&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPsJUEy7j03WehkCxapwhn0v0hlrwwhc4i8q8W5NxaXj8t10avvnvCwaAjt0EALw_wcB',
  'Chikungunya': 'https://www.cdc.gov/chikungunya/symptoms-diagnosis-treatment/index.html',
  'Hepatitis A': 'https://www.mayoclinic.org/diseases-conditions/hepatitis-a/diagnosis-treatment/drc-20367055',
  'Hepatitis B': 'https://www.mayoclinic.org/diseases-conditions/hepatitis-b/diagnosis-treatment/drc-20366821',
  'Influenza (Flu)': 'https://www.mayoclinic.org/diseases-conditions/flu/diagnosis-treatment/drc-20351725',
  'Chickenpox': 'https://www.mayoclinic.org/diseases-conditions/chickenpox/diagnosis-treatment/drc-20351287',
  'Measles': 'https://www.mayoclinic.org/diseases-conditions/measles/diagnosis-treatment/drc-20374862',
};

const CONSULT_LINKS = {
  'COVID-19': 'https://www.marham.pk/all-diseases/coronavirus/islamabad',
  'Dengue Fever': 'https://www.marham.pk/all-diseases/dengue-fever/rawalpindi',
  'Chikungunya': 'https://www.marham.pk/all-diseases/chikungunya/islamabad',
  'Hepatitis A': 'https://www.marham.pk/all-diseases/hepatitis/pakistan',
  'Hepatitis B': 'https://www.marham.pk/all-diseases/hepatitis-b-and-c/rawalpindi',
  'Influenza (Flu)': 'https://www.marham.pk/all-diseases/flu/rawalpindi',
  'Chickenpox': 'https://www.marham.pk/all-diseases/chicken-pox/rawalpindi',
  'Measles': 'https://www.marham.pk/all-diseases/measles/rawalpindi',
};

export default function ViralInfections() {
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [animateFilter, setAnimateFilter] = useState(false);

  const filteredInfections = VIRAL_INFECTIONS.filter(infection => {
    if (selectedSeverity === 'all') return true;
    return infection.severity.toLowerCase() === selectedSeverity.toLowerCase();
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Viral Infections</h1>
        <p>Information about common viral infections in Pakistan, prevention, and treatment</p>
      </div>

      <div className={`${styles.filters} ${animateFilter ? styles.filterPulse : ''}`}>
        <label htmlFor="severity-filter">Filter by Severity:</label>
        <select
          id="severity-filter"
          value={selectedSeverity}
          onChange={(e) => {
            setSelectedSeverity(e.target.value);
            setAnimateFilter(true);
            setTimeout(() => setAnimateFilter(false), 300);
          }}
          className={styles.severityFilter}
        >
          <option value="all">All Severities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className={styles.infectionsGrid}>
        {filteredInfections.map((infection, idx) => (
          <div key={infection.id} className={`${styles.infectionCard} ${styles.fadeIn}`} style={{ animationDelay: `${idx * 60}ms` }}>
            <div className={styles.cardHeader}>
              <div className={styles.infectionIcon}>{infection.icon}</div>
              <div className={styles.infectionInfo}>
                <h3>{infection.name}</h3>
                <span className={`${styles.severity} ${styles[infection.severity.toLowerCase()]}`}>
                  {infection.severity} Risk
                </span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.symptomsSection}>
                <h4>Common Symptoms:</h4>
                <ul className={styles.chips}>
                  {infection.symptoms.map((symptom, index) => (
                    <li key={index} className={styles.chip}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.preventionSection}>
                <h4>Prevention:</h4>
                <ul className={styles.chips}>
                  {infection.prevention.map((prevention, index) => (
                    <li key={index} className={`${styles.chip} ${styles.chipSuccess}`}>{prevention}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.treatmentSection}>
                <h4>Treatment:</h4>
                <p>{infection.treatment}</p>
              </div>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.learnMoreBtn}
                onClick={() => window.open(LEARN_MORE_LINKS[infection.name], '_blank', 'noopener,noreferrer')}
              >
                Learn More
              </button>
              <button
                className={styles.consultBtn}
                onClick={() => window.open(CONSULT_LINKS[infection.name], '_blank', 'noopener,noreferrer')}
              >
                Consult Doctor
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.generalPrevention}>
        <h2>General Prevention Tips</h2>
        <div className={styles.tipsGrid}>
          {PREVENTION_TIPS.map((tip, index) => (
            <div key={index} className={`${styles.tipCard} ${styles.fadeIn}`} style={{ animationDelay: `${index * 60}ms` }}>
              <span className={styles.tipNumber}>{index + 1}</span>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.emergencyInfo}>
        <h2>🚨 When to Seek Emergency Care</h2>
        <div className={styles.emergencyGrid}>
          <div className={`${styles.emergencyCard} ${styles.fadeIn}`} style={{ animationDelay: '80ms' }}>
            <div className={styles.emergencyIcon}>🚨</div>
            <h3>Severe Symptoms</h3>
            <p>Difficulty breathing, chest pain, severe dehydration, confusion, or high fever that doesn't respond to medication</p>
          </div>
          <div className={`${styles.emergencyCard} ${styles.fadeIn}`} style={{ animationDelay: '160ms' }}>
            <div className={styles.emergencyIcon}>⚠️</div>
            <h3>High-Risk Groups</h3>
            <p>Elderly, young children, pregnant women, or those with underlying health conditions should seek care early</p>
          </div>
          <div className={`${styles.emergencyCard} ${styles.fadeIn}`} style={{ animationDelay: '240ms' }}>
            <div className={styles.emergencyIcon}>📞</div>
            <h3>Emergency Numbers</h3>
            <p>Call 1122 for medical emergencies or visit the nearest emergency department immediately</p>
          </div>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <h3>⚠️ Important Notice</h3>
        <p>This information is for educational purposes only. Viral infections can be serious and require proper medical evaluation. Always consult healthcare professionals for diagnosis and treatment. Do not self-diagnose or self-treat viral infections.</p>
      </div>
    </div>
  );
}
