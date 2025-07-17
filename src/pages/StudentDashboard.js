import React, { useState } from 'react';
import '../styles/Dashboard.css';

// Example logo URLs (replace with your own or use public URLs)
const companyLogos = {
  Infosys: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Infosys_logo.svg',
  Google: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  TCS: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_Consultancy_Services_Logo.svg',
  Wipro: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Wipro_logo.svg',
  Amazon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
};

const dummyDrives = [
  {
    companyName: 'Infosys',
    jobTitle: 'Software Engineer',
    salary: 6,
    date: '2025-08-15',
    description: 'Work on enterprise software solutions, collaborate with teams, and grow your skills in a dynamic environment.'
  },
  {
    companyName: 'Google',
    jobTitle: 'Intern',
    salary: 20,
    date: '2025-09-01',
    description: 'Join Google as an intern and work on cutting-edge technologies with world-class engineers.'
  },
  {
    companyName: 'TCS',
    jobTitle: 'Java Developer',
    salary: 7,
    date: '2025-08-20',
    description: 'Develop scalable Java applications and contribute to large client projects.'
  },
  {
    companyName: 'Wipro',
    jobTitle: 'Support Engineer',
    salary: 5,
    date: '2025-09-10',
    description: 'Provide technical support and troubleshoot issues for global clients.'
  },
  {
    companyName: 'Amazon',
    jobTitle: 'Cloud Associate',
    salary: 15,
    date: '2025-09-15',
    description: 'Work on AWS cloud solutions and support cloud infrastructure for enterprise clients.'
  }
];

export default function StudentDashboard() {
  const [expanded, setExpanded] = useState(Array(dummyDrives.length).fill(false));
  const [resume, setResume] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleReadMore = (idx) => {
    setExpanded(expanded =>
      expanded.map((val, i) => (i === idx ? !val : val))
    );
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
    alert('Resume uploaded: ' + e.target.files[0].name);
  };

  return (
    <div className={`dashboard-container${darkMode ? ' dark-mode' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <h2 className="dashboard-title">📚 Student Dashboard</h2>
        <button
          className="mode-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="dashboard-section">
        <h3>Upcoming Drives</h3>
        <div className="drives-grid">
          {dummyDrives.map((drive, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <img
                  src={companyLogos[drive.companyName]}
                  alt={drive.companyName + " logo"}
                  style={{ width: 40, height: 40, objectFit: 'contain', marginRight: 12, background: '#fff', borderRadius: '6px', border: '1px solid #eee' }}
                />
                <h4 style={{ margin: 0 }}>{drive.companyName} - {drive.jobTitle}</h4>
              </div>
              <p>CTC: ₹{drive.salary} LPA</p>
              <p>Date: {drive.date}</p>
              <button
                className="nav-btn"
                style={{ marginBottom: '8px' }}
                onClick={() => handleReadMore(index)}
              >
                {expanded[index] ? 'Hide Details' : 'Read More'}
              </button>
              {expanded[index] && (
                <div>
                  <p><strong>Description:</strong> {drive.description}</p>
                  <label>
                    <strong>Upload Resume:</strong>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      style={{ display: 'block', marginTop: '8px' }}
                      onChange={handleResumeUpload}
                    />
                  </label>
                </div>
              )}
              <button className="btn-disabled" disabled>Apply (demo)</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
