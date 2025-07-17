import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

export default function App() {
  return (
    <Router>
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h1 className="campus-heading">Campus Placement Portal</h1>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/login" className="nav-btn">Login</Link>
          <Link to="/signup" className="nav-btn">Signup</Link>
          <Link to="/student-preview" className="nav-btn">Student Preview</Link>
          <Link to="/company-preview" className="nav-btn">Company Preview</Link>
          <Link to="/admin-preview" className="nav-btn">Admin Preview</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-preview" element={<StudentDashboard />} />
          <Route path="/company-preview" element={<CompanyDashboard />} />
          <Route path="/admin-preview" element={<AdminDashboard />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
