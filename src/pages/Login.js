import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/AuthForm.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/api/auth/login/STUDENT', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-heading">Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <button
        className="switch-btn"
        onClick={() => navigate('/signup')}
      >
        Switch to Signup
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
