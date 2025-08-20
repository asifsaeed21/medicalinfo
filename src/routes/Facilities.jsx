import React, { useEffect, useMemo, useState } from 'react';
import styles from './Facilities.module.css';

const FACILITIES = [
  {
    id: 1,
    name: "Aga Khan University Hospital",
    type: "Hospital",
    city: "Karachi",
    address: "Stadium Road, Karachi",
    phone: "+92 21 111 911 911",
    emergency: "1122",
    rating: 4.8,
    googleMaps: "https://www.google.com/maps/search/Aga+Khan+University+Hospital/@33.5994138,72.482383,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 2,
    name: "Shaukat Khanum Memorial Cancer Hospital",
    type: "Specialized Hospital",
    city: "Lahore",
    address: "7A Block R3, Johar Town, Lahore",
    phone: "+92 42 3590 5000",
    emergency: "1122",
    rating: 4.9,
    googleMaps: "https://www.google.com/maps/search/Shaukat+Khanum+Memorial+Cancer+Hospital/@33.5985395,72.4810033,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 3,
    name: "Pakistan Institute of Medical Sciences",
    type: "Government Hospital",
    city: "Islamabad",
    address: "Sector G-8/3, Islamabad",
    phone: "(051) 9261170",
    emergency: "1122",
    rating: 4.2,
    googleMaps: "https://www.google.com/maps/place/Premium+Diagnostic+and+Clinics/@33.7035185,73.0488739,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfb826dae131:0xba5e1cbcad4376fe!8m2!3d33.7035185!4d73.0514542!16zL20vMGQyeGNw?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 4,
    name: "Civil Hospital Karachi",
    type: "Government Hospital",
    city: "Karachi",
    address: "Civil Hospital Road, Karachi",
    phone: "(021) 99215740",
    emergency: "1122",
    rating: 4.0,
    googleMaps: "https://www.google.com/maps/place/Dr.+Ruth+K.+M.+Pfau,+Civil+Hospital+Karachi/@24.8589392,67.0075636,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e1aa2f228a5:0x156e18a225edddbc!8m2!3d24.8589392!4d67.0101439!16zL20vMGMwenJ4?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 5,
    name: "Mayo Hospital",
    type: "Government Hospital",
    city: "Lahore",
    address: "Outer Ring Road, Lahore",
    phone: "031717776509",
    emergency: "1122",
    rating: 4.1,
    googleMaps: "https://www.google.com/maps/place/Mayo+Hospital/@31.5806042,74.3038466,12z/data=!4m6!3m5!1s0x39191b5836f3f113:0x2a62621a26352d43!8m2!3d31.5707637!4d74.3172998!16zL20vMGMwdnk3?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 6,
    name: "Jinnah Postgraduate Medical Centre",
    type: "Government Hospital",
    city: "Karachi",
    address: "Rafiqui Shaheed Road, Karachi",
    phone: "021-4919656",
    emergency: "1122",
    rating: 4.3,
    googleMaps: "https://www.google.com/maps/search/Jinnah+Postgraduate+Medical+Centre+Karachi/@24.944493,67.1362518,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 7,
    name: "Liaquat National Hospital",
    type: "Private Hospital",
    city: "Karachi",
    address: "National Stadium Road, Karachi",
    phone: "021-34413010",
    emergency: "1122",
    rating: 4.6,
    googleMaps: "https://www.google.com/maps/place/Liaquat+National+Hospital,+Karachi,+Pakistan/@24.8922282,67.0632039,16z/data=!3m1!4b1!4m6!3m5!1s0x3eb33ee7a73966bf:0xdd386aed8c57ca4b!8m2!3d24.891586!4d67.068055!16s%2Fg%2F11gdxl49l7?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 8,
    name: "Services Hospital",
    type: "Government Hospital",
    city: "Lahore",
    address: "Outer Ring Road, Lahore",
    phone: "042 758 8351",
    emergency: "1122",
    rating: 4.0,
    googleMaps: "https://www.google.com/maps/place/Services+Hospital/@31.5409853,74.3297876,17z/data=!3m1!4b1!4m6!3m5!1s0x391904bfde85be07:0x8ebed25bbd0cf8c0!8m2!3d31.5409853!4d74.3323679!16s%2Fm%2F02ptgmb?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 9,
    name: "Holy Family Hospital",
    type: "Government Hospital",
    city: "Rawalpindi",
    address: "Mareer Hassan, Rawalpindi",
    phone: "03345296506",
    emergency: "1122",
    rating: 4.1,
    googleMaps: "https://www.google.com/maps/search/Holy+Family+Hospital/@31.3545884,69.7582958,6z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 10,
    name: "Benazir Bhutto Hospital",
    type: "Government Hospital",
    city: "Rawalpindi",
    address: "Benazir Bhutto Road, Rawalpindi",
    phone: "0519290301",
    emergency: "1122",
    rating: 4.0,
    googleMaps: "https://www.google.com/maps/place/Benazir+Bhutto+Hospital/@33.6281022,73.068344,17z/data=!3m1!4b1!4m6!3m5!1s0x38df94db30d61441:0x88d0305990f7961f!8m2!3d33.6281022!4d73.0709243!16s%2Fm%2F03h1s24?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 11,
    name: "Fatima Jinnah Medical University",
    type: "Medical University Hospital",
    city: "Lahore",
    address: "Shadman, Lahore",
    phone: "0519292900",
    emergency: "1122",
    rating: 4.4,
    googleMaps: "https://www.google.com/maps/place/Fatima+Jinnah+Medical+University/@31.5549297,74.3170803,17z/data=!3m1!4b1!4m6!3m5!1s0x391904ac25ae6a55:0x2085abebcd169bce!8m2!3d31.5549297!4d74.3196606!16s%2Fm%2F03gtspj?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 12,
    name: "Dow University Hospital",
    type: "University Hospital",
    city: "Karachi",
    address: "Baba-e-Urdu Road, Karachi",
    phone: "02138771111",
    emergency: "1122",
    rating: 4.2,
    googleMaps: "https://www.google.com/maps/search/+Dow+University+Hospital+pakistan/@24.944493,67.1362518,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 13,
    name: "King Edward Medical University",
    type: "Medical University Hospital",
    city: "Lahore",
    address: "Anarkali, Lahore",
    phone: "04299211145",
    emergency: "1122",
    rating: 4.3,
    googleMaps: "https://www.google.com/maps/place/King+Edward+Medical+University,+Lahore/@31.569989,74.3103379,17z/data=!3m1!4b1!4m6!3m5!1s0x39191b5781162c01:0x296c602b836a39cd!8m2!3d31.569989!4d74.3129182!16zL20vMDhjcl94?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 14,
    name: "CMH RAWALPINDI",
    type: "Military Hospital",
    city: "Rawalpindi",
    address: "The Mall, Rawalpindi",
    phone: "0519273426",
    emergency: "1122",
    rating: 4.5,
    googleMaps: "https://www.google.com/maps/place/Combined+Military+Hospital+Rawalpindi+(CMH)/@33.5809142,73.0446203,17z/data=!3m1!4b1!4m6!3m5!1s0x38df9370a0fed41d:0xeed8bbd712d8f63a!8m2!3d33.5809142!4d73.0472006!16s%2Fm%2F04z_364?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 15,
    name: "Armed Forces Institute of Cardiology",
    type: "Specialized Hospital",
    city: "Rawalpindi",
    address: "The Mall, Rawalpindi",
    phone: "0519271002",
    emergency: "1122",
    rating: 4.7,
    googleMaps: "https://www.google.com/maps/place/Armed+Forces+Institute+of+Cardiology+%26+National+Institute+of+Heart+Diseases+(AFIC-NIHD)/@33.5968303,73.0428443,17z/data=!3m1!4b1!4m6!3m5!1s0x38df9486abe42449:0x41f8f70bce753ce7!8m2!3d33.5968303!4d73.0454246!16s%2Fg%2F11ck2l2300?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 16,
    name: "National Institute of Cardiovascular Diseases",
    type: "Specialized Hospital",
    city: "Karachi",
    address: "Rafiqui Shaheed Road, Karachi",
    phone: "02199201271",
    emergency: "1122",
    rating: 4.6,
    googleMaps: "https://www.google.com/maps/search/National+Institute+of+Cardiovascular+Diseases+pakistan/@29.1203866,64.7343689,6z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 17,
    name: "National Institute of Child Health",
    type: "Specialized Hospital",
    city: "Karachi",
    address: "National Institute of Child Health, Karachi",
    phone: "02199201261",
    emergency: "1122",
    rating: 4.4,
    googleMaps: "https://www.google.com/maps/place/National+Institute+of+Child+Health+(NICH)/@24.8534378,67.0392071,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33df948dce477:0xabb95d227cd336d!8m2!3d24.8534378!4d67.0417874!16s%2Fg%2F11y5gssyrs?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 18,
    name: "Pakistan Kidney and Liver Institute",
    type: "Specialized Hospital",
    city: "Lahore",
    address: "Bedian Road, Lahore",
    phone: "042111117554",
    emergency: "1122",
    rating: 4.8,
    googleMaps: "https://www.google.com/maps/place/Pakistan+Kidney+and+Liver+Institute+and+Research+Centre+-+PKLI/@31.4557612,74.4609134,17z/data=!3m1!4b1!4m6!3m5!1s0x3919091ab38d2e77:0xf4ee79d2c942b021!8m2!3d31.4557612!4d74.4634937!16s%2Fg%2F11ckvk2ncb?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 19,
    name: "Shifa International Hospital",
    type: "Private Hospital",
    city: "Islamabad",
    address: "H-8/4, Islamabad",
    phone: "0518464646",
    emergency: "1122",
    rating: 4.7,
    googleMaps: "https://www.google.com/maps/search/Shifa+International+Hospital/@32.5290055,72.3692091,8z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  }
];

export default function Facilities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const t = setTimeout(() => setDebouncedTerm(searchTerm.trim()), 150);
    return () => clearTimeout(t);
  }, [searchTerm]);

  const cities = ['all', ...Array.from(new Set(FACILITIES.map(f => f.city)))];
  const types = ['all', ...Array.from(new Set(FACILITIES.map(f => f.type)))];

  const filteredFacilities = useMemo(() => {
    const term = debouncedTerm.toLowerCase();
    return FACILITIES.filter(facility => {
      const matchesSearch = !term || facility.name.toLowerCase().includes(term) || facility.address.toLowerCase().includes(term);
      const matchesCity = selectedCity === 'all' || facility.city === selectedCity;
      const matchesType = selectedType === 'all' || facility.type === selectedType;
      return matchesSearch && matchesCity && matchesType;
    });
  }, [debouncedTerm, selectedCity, selectedType]);

  const handleCall = (phoneNumber) => {
    const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
    window.open(`tel:${cleanNumber}`, '_self');
  };

  const handleDirections = (googleMapsUrl) => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Medical Facilities</h1>
        <p>Find hospitals, clinics, and healthcare centers across Pakistan</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search facilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            aria-label="Search facilities"
          />
        </div>
        
        <div className={styles.selectContainer}>
          <select 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
            className={styles.select}
            aria-label="Filter by city"
          >
            {cities.map(city => (
              <option key={city} value={city}>
                {city === 'all' ? 'All Cities' : city}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectContainer}>
          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
            className={styles.select}
            aria-label="Filter by type"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.facilities}>
        {filteredFacilities.length === 0 ? (
          <div className={styles.emptyState} role="status" aria-live="polite">
            <div className={styles.spinner}></div>
            <p>No facilities found. Try a different keyword or filters.</p>
          </div>
        ) : (
          filteredFacilities.map((facility, idx) => (
            <div key={facility.id} className={`${styles.facilityCard} ${styles.fadeIn}`} style={{ animationDelay: `${idx * 40}ms` }}>
              <div className={styles.facilityHeader}>
                <h3>{facility.name}</h3>
                <span className={styles.rating}>⭐ {facility.rating}</span>
              </div>

              <div className={styles.badges}>
                <span className={styles.badge}>{facility.type}</span>
                <span className={`${styles.badge} ${styles.badgeMuted}`}>{facility.city}</span>
                <span className={`${styles.badge} ${styles.badgeSuccess}`}>Emergency {facility.emergency}</span>
              </div>
              
              <div className={styles.facilityInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Address:</span>
                  <span className={styles.infoValue}>{facility.address}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Phone:</span>
                  <span className={styles.infoValue}>{facility.phone}</span>
                </div>
              </div>

              <div className={styles.facilityActions}>
                <button 
                  className={styles.callBtn}
                  onClick={() => handleCall(facility.phone)}
                >
                  Call Now
                </button>
                <button 
                  className={styles.directionsBtn}
                  onClick={() => handleDirections(facility.googleMaps)}
                >
                  Get Directions
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
