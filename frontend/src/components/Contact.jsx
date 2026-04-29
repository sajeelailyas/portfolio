import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import apiClient from '../config/axios';
import useMotionPresets from '../hooks/useMotionPresets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const { fadeInUp, staggerContainer, staggerItem, chipHover } = useMotionPresets();

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
          {...fadeInUp}
        >
          <div className="section-header">
            <h2>Contact</h2>
            <motion.div
              className="contact-links"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sajeelailyas@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="chip link"
                variants={staggerItem}
                whileHover={chipHover}
              >
                <FaEnvelope /> Email
              </motion.a>
              <motion.a
                href="https://github.com/sajeelailyas"
                target="_blank"
                rel="noopener noreferrer"
                className="chip link"
                variants={staggerItem}
                whileHover={chipHover}
              >
                <FaGithub /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sajeelailyas/"
                target="_blank"
                rel="noopener noreferrer"
                className="chip link"
                variants={staggerItem}
                whileHover={chipHover}
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.span className="chip soft" variants={staggerItem} whileHover={chipHover}>
                <FaPhone /> +92 348 8920263
              </motion.span>
              <motion.span className="chip soft" variants={staggerItem} whileHover={chipHover}>
                <FaMapMarkerAlt /> Islamabad, Pakistan
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="section-box"
          style={{ marginTop: '2rem' }}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
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

