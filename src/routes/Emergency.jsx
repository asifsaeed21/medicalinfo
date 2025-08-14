import React from 'react';
import styles from './Emergency.module.css';

const EMERGENCY_CONTACTS = [
  {
    id: 1,
    name: "Police Emergency",
    number: "15",
    description: "Direct line to police emergency services",
    type: "Police"
  },
  {
    id: 2,
    name: "Ambulance Service",
    number: "115",
    description: "Emergency medical transport and ambulance services",
    type: "Medical"
  },
  {
    id: 3,
    name: "Fire Brigade",
    number: "16",
    description: "Fire department emergency services",
    type: "Fire"
  },
  {
    id: 4,
    name: "Edhi Foundation Ambulance",
    number: "115",
    description: "Edhi Foundation emergency medical transport",
    type: "Medical"
  },
  {
    id: 5,
    name: "Chhipa Ambulance",
    number: "1020",
    description: "Chhipa Foundation emergency medical transport",
    type: "Medical"
  },
  {
    id: 6,
    name: "Bomb Disposal",
    number: "112",
    description: "Bomb disposal and explosive ordnance services",
    type: "Security"
  },
  {
    id: 7,
    name: "Coast Guard",
    number: "021-99214523",
    description: "Maritime emergency and coastal security services",
    type: "Maritime"
  },
  {
    id: 8,
    name: "Highway Police",
    number: "130",
    description: "Highway and motorway emergency services",
    type: "Police"
  },
  {
    id: 9,
    name: "Rescue 1122",
    number: "1122",
    description: "Emergency rescue services for Punjab/Sindh/KPK",
    type: "Rescue"
  },
  {
    id: 10,
    name: "KMC Ambulance",
    number: "0331-318-4444",
    description: "Karachi Metropolitan Corporation ambulance service",
    type: "Medical"
  }
];

export default function Emergency() {
  const handleCall = (phoneNumber) => {
    const cleanNumber = String(phoneNumber).replace(/[^\d+]/g, '');
    window.open(`tel:${cleanNumber}`, '_self');
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>🚨 Emergency Services</h1>
        <p>Quick access to emergency contacts and first aid information</p>
      </div>

      <div className={styles.emergencySection}>
        <h2>Emergency Contacts</h2>
        <div className={styles.contactsGrid}>
          {EMERGENCY_CONTACTS.map(contact => (
            <div key={contact.id} className={styles.contactCard}>
              <div className={styles.contactHeader}>
                <h3>{contact.name}</h3>
                <span className={styles.contactType}>{contact.type}</span>
              </div>
              <div className={styles.contactNumber}>{contact.number}</div>
              <p>{contact.description}</p>
              <button className={styles.callBtn} onClick={() => handleCall(contact.number)}>Call Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.warning}>
        <h3>⚠️ Important Notice</h3>
        <p>This information is for educational purposes only. In case of a real emergency:</p>
        <ul>
          <li>Call 115 for ambulance services (Edhi/General)</li>
          <li>Call 15 for police emergencies</li>
          <li>Call 16 for fire emergencies</li>
          <li>Call 1122 for rescue services (Punjab/Sindh/KPK)</li>
          <li>Call 1020 for Chhipa ambulance</li>
          <li>Call 130 for highway police</li>
          <li>Call 112 for bomb disposal</li>
          <li>Always seek professional medical help for serious injuries</li>
        </ul>
      </div>
    </div>
  );
}
