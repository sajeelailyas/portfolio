import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';
import apiClient from '../config/axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (status.type === 'success') {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [status.type]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await apiClient.post('/api/contact', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Contact</h2>
            <div className="contact-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sajeelailyas@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="chip link"
              >
                <FaEnvelope /> Email
              </a>
              <a
                href="https://github.com/sajeelailyas"
                target="_blank"
                rel="noopener noreferrer"
                className="chip link"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sajeelailyas/"
                target="_blank"
                rel="noopener noreferrer"
                className="chip link"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <span className="chip soft">
                <FaPhone /> +92 348 8920263
              </span>
              <span className="chip soft">
                <FaMapMarkerAlt /> Islamabad, Pakistan
              </span>
              <a
                href="/documents/CV_SajeelaIlyas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="chip link"
              >
                <FaFileDownload /> View CV
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="section-box"
          style={{ marginTop: '2rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

