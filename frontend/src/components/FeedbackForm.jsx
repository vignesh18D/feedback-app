import React, { useState } from 'react';

const FeedbackForm = ({ onFeedbackSubmit }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('https://feedback-app-gbwf.onrender.com/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (res.status === 201) {
      setSuccess(data.message);
      setForm({ name: '', email: '', message: '' });

      
      onFeedbackSubmit();  
    } else {
      setSuccess(data.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Feedback" value={form.message} onChange={handleChange} required />
      <button type="submit">Submit</button>
      {success && <p className="success">{success}</p>}
    </form>
  );
};

export default FeedbackForm;
