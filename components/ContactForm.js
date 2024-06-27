import { useState } from 'react';
import React from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };


  const containerStyle = {
    backgroundColor: '#1a202c',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#edf2f7',
  };

  const textCenterStyle = {
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#edf2f7',
    marginBottom: '1rem',
  };

  const borderStyle = {
    border: '2px solid #4a5568',
    borderRadius: '0.375rem',
    color: '#edf2f7',
    margin: '1rem 0',
    padding: '2rem',
    position: 'relative',
    backgroundColor: '#2d3748',
    boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '1rem auto',
    backgroundColor: '#1a202c',
  };

  const tableCellStyle = {
    border: '1px solid #4a5568',
    padding: '0.75rem',
    textAlign: 'left',
    fontSize: '1rem',
    color: '#edf2f7',
  };

  const mapContainerStyle = {
    width: '100%',
    overflow: 'hidden',
    padding: '1rem',
  };

  const mapStyle = {
    filter: 'invert(90%)',
    border: 'none',
    width: '100%',
    height: '450px',
    transition: 'transform 0.5s',
    borderRadius: '0.375rem',
  };

  const formGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#edf2f7',
  };

  const inputStyle = {
    marginTop: '0.25rem',
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #4a5568',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    backgroundColor: '#2d3748',
    color: '#edf2f7',
  };

  const buttonStyle = {
    backgroundColor: '#4299e1',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2b6cb0',
  };

  return (
    <div style={containerStyle}>
      <div style={textCenterStyle}>
        <h1 style={headingStyle}>Contact Us</h1>
      </div>
      <div>
        <div style={borderStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', borderBottom: '2px solid #4a5568', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <div style={{ margin: '1rem' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={tableCellStyle}>Address:</th>
                      <td style={tableCellStyle}>
                        IIIT Lucknow <br /> Chak Ganjaria, C. G. City <br /> Lucknow - 226002
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th style={tableCellStyle}>Fax: </th>
                      <td style={tableCellStyle}>+91 1234567890</td>
                    </tr>
                    <tr>
                      <th style={tableCellStyle}>Working Hours: </th>
                      <td style={tableCellStyle}>9.00 AM to 5.30 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <div style={mapContainerStyle}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.22797035126!2d81.02144971071534!3d26.80086887661701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1697909167466!5m2!1sen!2sin"
                  style={mapStyle}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIIT Lucknow Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div style={{ overflowX: 'auto', borderTop: '2px solid #4a5568', paddingTop: '1rem' }}>
          </div>
        </div>
      </div>
      <div>
        <div style={borderStyle}>
          <h2 style={{ ...headingStyle, fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Send us a message</h2>
          <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="message">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, height: '150px' }}
              />
            </div>
            <div style={textCenterStyle}>
              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                Send
              </button>
            </div>
          </form>
          <p style={{ textAlign: 'center', marginTop: '1rem', color: '#edf2f7', fontSize: '1rem' }}>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
