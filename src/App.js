import React, { useState } from 'react';
import './index.css'; // Or './App.css' if you're using that instead

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate EmailJS, Zapier, or custom API here
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Logo */}
      <img
        src="/synergy-logo.png"
        alt="Synergy Logo"
        style={{ maxWidth: '200px', marginBottom: '1rem' }}
      />

      {/* Headline & Pitch */}
      <h1>Built for Independent Agents. Designed for Growth.</h1>
      <p style={{ fontSize: '1.1rem', color: '#555' }}>
        Synergy Field Agent Pro brings together client mapping, appointment
        tracking, AI-driven insights, and referral tools — all in one smart,
        mobile-friendly app built for modern insurance pros.
      </p>

      {/* Join Waitlist Form */}
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '0.5rem',
              fontSize: '1rem',
              width: '70%',
              marginBottom: '1rem',
            }}
          />

          {/* ✅ reCAPTCHA */}
          <div
            className="g-recaptcha"
            data-sitekey="6LfbSgYpAAAAAGOMvhKHEs_HsUdGZBGzmqozL-FL"
            style={{ marginBottom: '1rem' }}
          ></div>

          <button
            type="submit"
            style={{
              padding: '0.6rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#2f5ac3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Join Waitlist
          </button>
        </form>
      ) : (
        <p style={{ marginTop: '2rem', color: 'green' }}>
          Thanks! You're on the list. ✅
        </p>
      )}
    </div>
  );
}

export default App;
