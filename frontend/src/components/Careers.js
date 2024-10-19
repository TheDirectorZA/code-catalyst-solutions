import React, { useState } from 'react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log(formData);
  };

  return (
    <section id="careers" className="careers section">
      <div className="container">
        <h2>Join Our Team</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Resume:
            <input type="file" name="resume" value={formData.resume} onChange={handleChange} required />
          </label>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </section>
  );
};

export default Careers;
