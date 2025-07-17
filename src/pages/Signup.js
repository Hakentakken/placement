import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/AuthForm.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/auth/signup/STUDENT', { email, password });
      alert('Signup successful!');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed.');
    }
  };

  return (
    <div className="auth-form-container center-content">
      <h2 className="auth-heading">Student Signup</h2>
      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ textAlign: 'center' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ textAlign: 'center' }}
        />
        <button type="submit" style={{ alignSelf: 'center' }}>Signup</button>
      </form>
      <button
        className="switch-btn"
        style={{ margin: '0 auto', display: 'block' }}
        onClick={() => navigate('/login')}
      >
        Switch to Login
      </button>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p>👀 Want to preview without login?</p>
        <Link to="/student-preview">Student</Link> |{" "}
        <Link to="/company-preview">Company</Link> |{" "}
        <Link to="/admin-preview">Admin</Link>
      </div>
    </div>
  );
}
