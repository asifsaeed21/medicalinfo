import React, { useMemo, useState, useEffect } from 'react';
import styles from './Diseases.module.css';

const DISEASES_DATA = [
	{
		id: 1,
		name: "Diabetes",
		category: "Chronic Disease",
		symptoms: ["Frequent urination", "Excessive thirst", "Increased hunger", "Weight loss", "Fatigue"],
		prevention: ["Maintain healthy weight", "Regular exercise", "Balanced diet", "Regular check-ups"],
		description: "Diabetes is a chronic disease that affects how your body turns food into energy.",
		link: "https://www.kidney.org/kidney-topics/about-diabetes-are-you-risk?gad_source=1&gad_campaignid=22830522187&gbraid=0AAAAADiS1x0lX_9mt1CWV0nPu53aZ7OuZ&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPs__I_ui4ftNtqe0Ljcme2D1p0bL7EFHNItxvXtvwvvCrmEzyNg9TkaAoJpEALw_wcB",
		consultLink: "https://www.marham.pk/doctors/diabetologist"
	},
	{
		id: 2,
		name: "Hypertension",
		category: "Cardiovascular",
		symptoms: ["Headaches", "Shortness of breath", "Nosebleeds", "Chest pain", "Dizziness"],
		prevention: ["Reduce salt intake", "Regular exercise", "Maintain healthy weight", "Limit alcohol"],
		description: "High blood pressure that can lead to serious health problems if left untreated.",
		link: "https://pvrinstitute.org/pulmonary-hypertension/what-pulmonary-hypertension-ph?gad_source=1&gad_campaignid=21539525273&gbraid=0AAAAADPGp9h9ihoM5WTR1ebU5PQT7yvfy&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPtVjPAzwA6VYxkBWF-aXAgW7tCbl4TJtVVnYNryHtHeRHx6jzU8iOYaApUJEALw_wcB",
		consultLink: "https://www.marham.pk/all-diseases/blood-pressure/pakistan"
	},
	{
		id: 3,
		name: "Respiratory Infections",
		category: "Infectious Disease",
		symptoms: ["Cough", "Fever", "Sore throat", "Runny nose", "Difficulty breathing"],
		prevention: ["Good hygiene", "Avoid close contact with sick people", "Vaccination", "Healthy lifestyle"],
		description: "Common infections affecting the respiratory system, especially during seasonal changes.",
		link: "https://www.ncbi.nlm.nih.gov/books/NBK8142/",
		consultLink: "https://www.marham.pk/all-services/respiratory-issues/islamabad"
	},
	{
		id: 4,
		name: "Gastroenteritis",
		category: "Digestive",
		symptoms: ["Diarrhea", "Vomiting", "Stomach cramps", "Fever", "Dehydration"],
		prevention: ["Clean water", "Proper food handling", "Good hygiene", "Vaccination"],
		description: "Inflammation of the stomach and intestines, often caused by viral or bacterial infection.",
		link: "https://my.clevelandclinic.org/health/diseases/gastroenteritis",
		consultLink: "https://www.marham.pk/doctors/gastroenterologist"
	},
	{
		id: 5,
		name: "Heart Disease",
		category: "Cardiovascular",
		symptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Irregular heartbeat", "Swelling in legs"],
		prevention: ["Healthy diet", "Regular exercise", "No smoking", "Manage stress", "Regular check-ups"],
		description: "Various conditions affecting the heart and blood vessels, a leading cause of death worldwide.",
		link: "https://baker.edu.au/health-hub/heart-failure?gad_source=1&gad_campaignid=1042082331&gbraid=0AAAAAD2MqSkmJnWOoNrF6xx0L84A4N88W&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPs3YI64jAc92ssRfu4cdz44gfYTsPIrH6u4x5PJBCdjgy8I3csFIDIaAtVWEALw_wcB",
		consultLink: "https://www.marham.pk/doctors/cardiologist"
	},
	{
		id: 6,
		name: "Asthma",
		category: "Respiratory",
		symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Difficulty breathing"],
		prevention: ["Avoid triggers", "Regular medication", "Clean environment", "Regular check-ups"],
		description: "Chronic respiratory condition causing inflammation and narrowing of airways.",
		link: "https://www.euforea.eu/patient-portal/asthma/?utm_source=google&utm_medium=ads&utm_campaign=asthma_patient_portal&gad_source=1&gad_campaignid=22876081413&gbraid=0AAAAApUTLd5r2dv6qvNqiVSfZRTJkj4jI&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPuS8JSM4RqlpXikYYrBxDMQ_Ks1--cS_CLJOy5GIDRBNYOdZfDQg3oaAmk6EALw_wcB",
		consultLink: "https://www.marham.pk/all-diseases/asthma/pakistan"
	},
	{
		id: 7,
		name: "Obesity",
		category: "Lifestyle Disease",
		symptoms: ["Excess body fat", "Difficulty breathing", "Joint pain", "Fatigue", "Sleep problems"],
		prevention: ["Balanced diet", "Regular exercise", "Portion control", "Healthy lifestyle choices"],
		description: "Medical condition characterized by excessive body fat that can lead to serious health issues.",
		link: "https://obesitycanada.ca/healthcare-professionals/podcast/catalog/?gad_source=1&gad_campaignid=22786595215&gbraid=0AAAAADRvApq_sGt5Xs8OzMeVjCh0J8mRU&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPs4hfqpSUQhHo7vUslUbE5R6GAdAE6dvF4hVZGWWVfS-JxKcMeJ6dgaAp9jEALw_wcB",
		consultLink: "https://www.marham.pk/all-diseases/high-grade-obesity/rawalpindi"
	},
	{
		id: 8,
		name: "Depression",
		category: "Mental Health",
		symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep changes", "Difficulty concentrating"],
		prevention: ["Regular exercise", "Social connections", "Stress management", "Professional help when needed"],
		description: "Mental health disorder characterized by persistent feelings of sadness and loss of interest.",
		link: "https://bbrfoundation.org/faq/frequently-asked-questions-about-depression?gad_source=1&gad_campaignid=11803996713&gbraid=0AAAAADyJTkdmQN_BFVr3gxQxHGN95lrsg&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPuS8JSM4RqlpXikYYrBxDMQ_Ks1--cS_CLJOy5GIDRBNYOdZfDQg3oaAmk6EALw_wcB",
		consultLink: "https://www.marham.pk/doctors/psychiatrist"
	},
	{
		id: 9,
		name: "Arthritis",
		category: "Musculoskeletal",
		symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion", "Fatigue"],
		prevention: ["Regular exercise", "Healthy weight", "Joint protection", "Proper posture"],
		description: "Inflammation of joints causing pain and stiffness, affecting millions of people worldwide.",
		link: "https://my.clevelandclinic.org/health/diseases/12061-arthritis",
		consultLink: "https://www.marham.pk/all-diseases/arthritis/rawalpindi"
	},
	{
		id: 10,
		name: "Cancer",
		category: "Oncology",
		symptoms: ["Unexplained weight loss", "Fatigue", "Pain", "Skin changes", "Lumps"],
		prevention: ["Healthy lifestyle", "Regular screenings", "Avoid tobacco", "Protect from sun", "Vaccination"],
		description: "Group of diseases characterized by uncontrolled cell growth that can spread to other parts of the body.",
		link: "https://my.clevelandclinic.org/health/diseases/12194-cancer",
		consultLink: "https://www.marham.pk/doctors/oncologist"
	},
	{
		id: 11,
		name: "Kidney Disease",
		category: "Urological",
		symptoms: ["Fatigue", "Swelling", "Changes in urination", "Nausea", "Shortness of breath"],
		prevention: ["Control blood pressure", "Manage diabetes", "Healthy diet", "Regular exercise", "Avoid smoking"],
		description: "Condition where kidneys lose their ability to filter waste and excess fluid from the blood.",
		link: "https://www.mayoclinic.org/diseases-conditions/chronic-kidney-disease/symptoms-causes/syc-20354521",
		consultLink: "https://www.marham.pk/doctors/nephrologist"
	},
	{
		id: 12,
		name: "Liver Disease",
		category: "Hepatology",
		symptoms: ["Jaundice", "Abdominal pain", "Fatigue", "Nausea", "Loss of appetite"],
		prevention: ["Limit alcohol", "Healthy diet", "Vaccination", "Avoid risky behaviors", "Regular check-ups"],
		description: "Various conditions affecting the liver's ability to function properly.",
		link: "https://www.mayoclinic.org/diseases-conditions/liver-problems/symptoms-causes/syc-20374502",
		consultLink: "https://www.marham.pk/doctors/liver-specialist"
	},
	{
		id: 13,
		name: "Stroke",
		category: "Neurological",
		symptoms: ["Sudden numbness", "Confusion", "Difficulty speaking", "Vision problems", "Severe headache"],
		prevention: ["Control blood pressure", "Healthy diet", "Regular exercise", "No smoking", "Manage diabetes"],
		description: "Medical emergency caused by interrupted blood flow to the brain.",
		link: "https://afterstroke.org/rebuilding-your-life-after-stroke/?gad_source=1&gad_campaignid=20192842541&gbraid=0AAAAApogi36WRocPlB_AXI5Cj4SPxVJPU&gclid=Cj0KCQjw5JXFBhCrARIsAL1ckPvyFTdkmYRX0uL6RprJiNL_1Zkhqh-5wGOT2PLEKXDxzgu0Zhe5uoYaAiQfEALw_wcB",
		consultLink: "https://www.marham.pk/all-diseases/stroke/rawalpindi"
	},
	{
		id: 14,
		name: "Tuberculosis",
		category: "Infectious Disease",
		symptoms: ["Persistent cough", "Chest pain", "Coughing up blood", "Fatigue", "Night sweats"],
		prevention: ["Vaccination", "Good ventilation", "Avoid close contact", "Regular testing", "Healthy lifestyle"],
		description: "Bacterial infection that primarily affects the lungs but can spread to other organs.",
		link: "https://my.clevelandclinic.org/health/diseases/11301-tuberculosis",
		consultLink: "https://www.marham.pk/all-diseases/tuberculosis/islamabad"
	}
];

const CATEGORIES = ['All', ...Array.from(new Set(DISEASES_DATA.map(d => d.category)))];

export default function Diseases() {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [searchTerm, setSearchTerm] = useState('');
	const [debouncedTerm, setDebouncedTerm] = useState('');

	// Debounce search input for smoother UI
	useEffect(() => {
		const t = setTimeout(() => setDebouncedTerm(searchTerm.trim()), 150);
		return () => clearTimeout(t);
	}, [searchTerm]);

	const filteredDiseases = useMemo(() => {
		const term = debouncedTerm.toLowerCase();
		return DISEASES_DATA.filter(disease => {
			const matchesCategory = selectedCategory === 'All' || disease.category === selectedCategory;
			const matchesSearch = !term || disease.name.toLowerCase().includes(term) || disease.description.toLowerCase().includes(term);
			return matchesCategory && matchesSearch;
		});
	}, [selectedCategory, debouncedTerm]);

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
						aria-label="Search diseases"
					/>
				</div>
				
				<div className={styles.selectContainer}>
					<select
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
						className={styles.categorySelect}
						aria-label="Filter by category"
					>
						{CATEGORIES.map(category => (
							<option key={category} value={category}>{category}</option>
						))}
					</select>
				</div>
			</div>

			<div className={styles.diseasesGrid}>
				{filteredDiseases.length === 0 ? (
					<div className={styles.emptyState} role="status" aria-live="polite">
						<div className={styles.spinner}></div>
						<p>No diseases found. Try a different keyword or category.</p>
					</div>
				) : (
					filteredDiseases.map((disease, idx) => (
						<div key={disease.id} className={`${styles.diseaseCard} ${styles.fadeIn}`} style={{ animationDelay: `${idx * 40}ms` }}>
							<div className={styles.diseaseHeader}>
								<h3>{disease.name}</h3>
								<span className={styles.category}>{disease.category}</span>
							</div>
							
							<p className={styles.description}>{disease.description}</p>
							
							<div className={styles.diseaseContent}>
								<div className={styles.symptomsSection}>
									<h4>Common Symptoms</h4>
									<ul className={styles.chips}>
										{disease.symptoms.map((symptom, index) => (
											<li key={index} className={styles.chip}>{symptom}</li>
										))}
									</ul>
								</div>
								
								<div className={styles.preventionSection}>
									<h4>Prevention</h4>
									<ul className={styles.chips}>
										{disease.prevention.map((prevention, index) => (
											<li key={index} className={`${styles.chip} ${styles.chipSuccess}`}>{prevention}</li>
										))}
									</ul>
								</div>
							</div>
							
							<div className={styles.actions}>
								<a href={disease.link} target="_blank" rel="noopener noreferrer" className={styles.learnMoreBtn}>Learn More</a>
								<a href={disease.consultLink} target="_blank" rel="noopener noreferrer" className={styles.consultBtn}>Consult Doctor</a>
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
