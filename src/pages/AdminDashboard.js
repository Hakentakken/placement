import React, { useState } from 'react';
import '../styles/Dashboard.css';

const users = [
  { name: 'Alice', role: 'Student', email: 'alice@student.edu', status: 'Active', joined: '2025-06-01' },
  { name: 'Bob Corp', role: 'Company', email: 'hr@bobcorp.com', status: 'Verified', joined: '2025-05-20' },
  { name: 'Charlie', role: 'Student', email: 'charlie@student.edu', status: 'Pending', joined: '2025-06-10' }
];

const drives = [
  {
    company: 'Wipro',
    title: 'Support Engineer',
    openings: 5,
    postedOn: '2025-07-10',
    status: 'Open',
    applicants: 23,
    description: 'Provide technical support and troubleshoot issues for global clients. Good communication skills required.'
  },
  {
    company: 'TCS',
    title: 'Java Developer',
    openings: 3,
    postedOn: '2025-07-15',
    status: 'Closed',
    applicants: 15,
    description: 'Develop scalable Java applications and contribute to large client projects. Experience in Spring Boot preferred.'
  }
];

export default function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`dashboard-container${darkMode ? ' dark-mode' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <h2 className="dashboard-title">🛠️ Admin Dashboard</h2>
        <button
          className="mode-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="dashboard-section">
        <h3>👥 All Users</h3>
        <div className="drives-grid">
          {users.map((u, i) => (
            <div key={i} className="card">
              <h4>{u.name} <span style={{ fontWeight: 400, fontSize: '1rem', color: '#888' }}>({u.role})</span></h4>
              <p><strong>Email:</strong> {u.email}</p>
              <p><strong>Status:</strong> <span style={{ color: u.status === 'Active' || u.status === 'Verified' ? '#43cea2' : '#ff9800' }}>{u.status}</span></p>
              <p><strong>Joined:</strong> {u.joined}</p>
              <button className="nav-btn" style={{ marginTop: '8px' }} disabled>View Profile (demo)</button>
              <button className="nav-btn" style={{ marginTop: '8px' }} disabled>Send Message (demo)</button>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>💼 All Drives</h3>
        <div className="drives-grid">
          {drives.map((d, i) => (
            <div key={i} className="card">
              <h4>{d.company} - {d.title}</h4>
              <p><strong>Openings:</strong> {d.openings}</p>
              <p><strong>Posted On:</strong> {d.postedOn}</p>
              <p><strong>Status:</strong> <span style={{ color: d.status === 'Open' ? '#43cea2' : '#ff9800' }}>{d.status}</span></p>
              <p><strong>Applicants:</strong> {d.applicants}</p>
              <button
                className="nav-btn"
                style={{ marginBottom: '8px' }}
                onClick={() => alert(d.description)}
              >
                View Description
              </button>
              <button className="nav-btn" style={{ marginBottom: '8px' }} disabled>View Applicants (demo)</button>
              <p style={{ fontSize: '0.95rem', color: '#888' }}><strong>Role:</strong> {d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
