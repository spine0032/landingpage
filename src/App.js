import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render('recaptcha-container', {
            sitekey: '6Lcn9pQrAAAAAOucfmOXqzElBtq7RlELnp4J1QOX',
          });
        });
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_574gjgm', 'template_9ufh73l', { user_email: email }, 'spcrOI2BwY7f9kbUI')
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('There was a problem. Please try again later.');
      });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <img src="/synergy-logo.png" alt="Synergy Logo" style={{ maxWidth: '200px', marginBottom: '1rem' }} />

      <h1>Built for Independent Agents. Designed for Growth.</h1>
      <p style={{ fontSize: '1.1rem', color: '#555' }}>
        Synergy Field Agent Pro brings together client mapping, appointment tracking, AI-driven insights, and referral tools —
        all in one smart, mobile-friendly app built for modern insurance pros.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.5rem', fontSize: '1rem', width: '70%', marginBottom: '1rem' }}
          />

          <div
            id="recaptcha-container"
            className="g-recaptcha"
            data-sitekey="6Lcn9pQrAAAAAOucfmOXqzElBtq7RlELnp4J1QOX"
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
        <p style={{ marginTop: '2rem', color: 'green' }}>Thanks! You're on the list. ✅</p>
      )}
    </div>
  );
}

export default App;