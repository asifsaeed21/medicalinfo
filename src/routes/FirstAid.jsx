import React, { useState } from 'react';
import styles from './FirstAid.module.css';

const FIRST_AID_SCENARIOS = [
  {
    id: 1,
    title: "Bleeding",
    severity: "High",
    steps: [
      "Apply direct pressure to the wound with a clean cloth or sterile gauze",
      "Elevate the injured area above the heart if possible",
      "Keep pressure for at least 10-15 minutes",
      "If bleeding continues, apply additional layers of cloth",
      "Seek immediate medical attention for severe bleeding"
    ],
    donts: [
      "Don't remove objects embedded in the wound",
      "Don't apply a tourniquet unless absolutely necessary",
      "Don't clean deep wounds yourself"
    ],
    icon: "🩸"
  },
  {
    id: 2,
    title: "Burns",
    severity: "Medium",
    steps: [
      "Cool the burn with cool (not cold) water for 10-20 minutes",
      "Remove jewelry or tight items from the burned area",
      "Cover with sterile gauze or clean cloth",
      "Do not pop blisters",
      "Seek medical attention for severe burns"
    ],
    donts: [
      "Don't use ice or very cold water",
      "Don't apply butter, oil, or ointments",
      "Don't break blisters"
    ],
    icon: "🔥"
  },
  {
    id: 3,
    title: "Choking",
    severity: "High",
    steps: [
      "Give 5 back blows between shoulder blades",
      "Perform 5 abdominal thrusts (Heimlich maneuver)",
      "Alternate between back blows and abdominal thrusts",
      "Call emergency services immediately",
      "Continue until object is dislodged or help arrives"
    ],
    donts: [
      "Don't perform abdominal thrusts on infants",
      "Don't give food or drink to someone who is choking",
      "Don't slap on the back"
    ],
    icon: "😵"
  },
  {
    id: 4,
    title: "Fractures",
    severity: "Medium",
    steps: [
      "Stop any bleeding first",
      "Immobilize the injured area",
      "Apply ice to reduce swelling",
      "Elevate the injured area if possible",
      "Seek medical attention immediately"
    ],
    donts: [
      "Don't try to realign the bone",
      "Don't move the person unless necessary",
      "Don't apply heat to the injury"
    ],
    icon: "🦴"
  },
  {
    id: 5,
    title: "Heart Attack",
    severity: "High",
    steps: [
      "Call emergency services immediately (1122)",
      "Have the person sit down and rest",
      "Loosen tight clothing",
      "Give aspirin if available and not allergic",
      "Monitor breathing and consciousness"
    ],
    donts: [
      "Don't leave the person alone",
      "Don't give food or drink",
      "Don't wait to see if symptoms improve"
    ],
    icon: "❤️"
  },
  {
    id: 6,
    title: "Seizures",
    severity: "Medium",
    steps: [
      "Clear the area of dangerous objects",
      "Place something soft under the head",
      "Turn the person on their side",
      "Time the seizure duration",
      "Call emergency services if seizure lasts more than 5 minutes"
    ],
    donts: [
      "Don't hold the person down",
      "Don't put anything in their mouth",
      "Don't try to stop the seizure"
    ],
    icon: "⚡"
  },
  {
    id: 7,
    title: "Heat Stroke",
    severity: "High",
    steps: [
      "Move to a cool place immediately",
      "Remove excess clothing",
      "Apply cool, wet cloths to the body",
      "Fan the person to increase air circulation",
      "Call emergency services if severe"
    ],
    donts: [
      "Don't give alcohol or caffeine",
      "Don't use ice baths",
      "Don't leave the person unattended"
    ],
    icon: "🌡️"
  },
  {
    id: 8,
    title: "Poisoning",
    severity: "High",
    steps: [
      "Call poison control center immediately",
      "Remove the person from the source",
      "Check breathing and consciousness",
      "Do NOT induce vomiting",
      "Bring the poison container if possible"
    ],
    donts: [
      "Don't give anything by mouth",
      "Don't wait for symptoms to appear",
      "Don't try home remedies"
    ],
    icon: "☠️"
  },
  {
    id: 9,
    title: "Eye Injury",
    severity: "Medium",
    steps: [
      "Do not rub the eye",
      "Rinse with clean water for 15 minutes",
      "Cover both eyes to prevent movement",
      "Do not apply pressure",
      "Seek immediate medical attention"
    ],
    donts: [
      "Don't remove objects stuck in the eye",
      "Don't use eye drops without medical advice",
      "Don't delay seeking medical help"
    ],
    icon: "👁️"
  },
  {
    id: 10,
    title: "Snake Bite",
    severity: "High",
    steps: [
      "Keep the person calm and still",
      "Remove jewelry and tight clothing",
      "Keep the bitten area below heart level",
      "Clean the wound with soap and water",
      "Call emergency services immediately"
    ],
    donts: [
      "Don't suck out the venom",
      "Don't apply a tourniquet",
      "Don't cut the wound"
    ],
    icon: "🐍"
  }
];



export default function FirstAid() {
  const [selectedSeverity, setSelectedSeverity] = useState('all');

  const filteredScenarios = FIRST_AID_SCENARIOS.filter(scenario => {
    if (selectedSeverity === 'all') return true;
    return scenario.severity.toLowerCase() === selectedSeverity.toLowerCase();
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🚑 First Aid Guide</h1>
        <p>Essential first aid information for common emergencies</p>
      </div>



      <div className={styles.filters}>
        <label htmlFor="severity-filter">Filter by Severity:</label>
        <select
          id="severity-filter"
          value={selectedSeverity}
          onChange={(e) => setSelectedSeverity(e.target.value)}
          className={styles.severityFilter}
        >
          <option value="all">All Severities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className={styles.scenariosGrid}>
        {filteredScenarios.map(scenario => (
          <div key={scenario.id} className={styles.scenarioCard}>
            <div className={styles.cardHeader}>
              <div className={styles.scenarioIcon}>{scenario.icon}</div>
              <div className={styles.scenarioInfo}>
                <h3>{scenario.title}</h3>
                <span className={`${styles.severity} ${styles[scenario.severity.toLowerCase()]}`}>
                  {scenario.severity} Priority
                </span>
              </div>
            </div>

            <div className={styles.stepsSection}>
              <h4>What to Do:</h4>
              <ol>
                {scenario.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className={styles.dontsSection}>
              <h4>What NOT to Do:</h4>
              <ul>
                {scenario.donts.map((dont, index) => (
                  <li key={index}>{dont}</li>
                ))}
              </ul>
            </div>

            <div className={styles.actions}>
              <button className={styles.learnMoreBtn}>Learn More</button>
              <button className={styles.videoBtn}>Watch Video</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.importantNotes}>
        <h2> Important Notes</h2>
        <div className={styles.notesList}>
          <div className={styles.noteItem}>
            <h3>When to Call Emergency Services</h3>
            <ul>
              <li>Severe bleeding that doesn't stop</li>
              <li>Difficulty breathing or chest pain</li>
              <li>Unconsciousness or severe head injury</li>
              <li>Severe burns or electrical injuries</li>
              <li>Poisoning or drug overdose</li>
            </ul>
          </div>
          
          <div className={styles.noteItem}>
            <h3>First Aid Kit Essentials</h3>
            <ul>
              <li>Sterile gauze and bandages</li>
              <li>Adhesive tape and scissors</li>
              <li>Antiseptic wipes and ointment</li>
              <li>Pain relievers and thermometer</li>
              <li>Emergency contact information</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <h3>🚨 Medical Disclaimer</h3>
        <p>This first aid information is for educational purposes only. First aid is not a substitute for professional medical care. Always call emergency services (1122) for serious injuries or medical emergencies. The information provided here is meant to help in emergency situations until professional help arrives.</p>
      </div>
    </div>
  );
}
