import { useState } from "react";

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", specialty: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h1>Run Your Insurance Business Smarter — From the Field.</h1>
      <p>An all-in-one mobile app designed for independent agents.</p>
      <button>🔔 Join the Early Access List</button>
      <h2>▶️ See Synergy Field Agent Pro in Action</h2>
      <ul>
        <li>Visual client mapping & route optimization</li>
        <li>Automated referral tracking & partner system</li>
        <li>Client info at your fingertips</li>
        <li>Daily motivation & goal tracking</li>
        <li>AI chatbot for policy support and reminders</li>
        <li>Built-in cross-sell & upsell prompts</li>
      </ul>
      <h2>💰 Proposed Pricing Tiers (for feedback)</h2>
      <p>We’re still finalizing pricing — what do you think is fair?</p>
      <ul>
        <li>Basic: $19–$29/mo</li>
        <li>Pro: $49–$69/mo</li>
        <li>Elite: $89–$99/mo</li>
      </ul>
      <h2>📬 Be the First to Know When We Launch</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} />
        <input name="email" placeholder="Your Email" onChange={handleChange} />
        <select name="specialty" onChange={handleChange}>
          <option value="">Select Your Specialty</option>
          <option value="Life">Life</option>
          <option value="Health">Health</option>
          <option value="P&C">P&C</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
