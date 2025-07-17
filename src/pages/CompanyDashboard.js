import React, { useState } from 'react';
import '../styles/Dashboard.css';

const postedDrives = [
  { title: 'Frontend Developer', applicants: 12, date: '2025-07-25' },
  { title: 'Backend Developer', applicants: 8, date: '2025-08-10' }
];

export default function CompanyDashboard() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`dashboard-container${darkMode ? ' dark-mode' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <h2 className="dashboard-title">🏢 Company Dashboard</h2>
        <button
          className="mode-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <div className="dashboard-section">
        <h3>Posted Drives</h3>
        {postedDrives.map((drive, idx) => (
          <div key={idx} className="card">
            <h4>{drive.title}</h4>
            <p>Applicants: {drive.applicants}</p>
            <p>Date: {drive.date}</p>
          </div>
        ))}
      </div>
      <button className="btn-disabled" disabled>+ Post New Drive (demo)</button>
    </div>
  );
}
