import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const chips = [
    'Sajeela Ilyas • BSE @ COMSATS',
    'MERN Stack • Flutter • Java OOP',
    'Responsive Web Applications',
    'Testing & QA • SRS • Documentation'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>About</h2>
            <div className="section-content">
              <div className="chips-container">
                {chips.map((chip, index) => (
                  <span key={index} className="chip soft">
                    {chip}
                  </span>
                ))}
              </div>
              <button
                className="chip icon-chip"
                onClick={() => setIsModalOpen(true)}
              >
                ℹ️ Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <motion.div
            className="modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <h3>About Me</h3>
              <p>
                I am Sajeela Ilyas, a motivated and detail-oriented Software Engineer with a Bachelor's degree in Software Engineering 
                from COMSATS University Islamabad. I am passionate about web development and skilled in front-end technologies such as 
                HTML, CSS, JavaScript, and React, while also working with the MERN stack. I enjoy building user-friendly and responsive 
                web applications and understanding how different parts of a website work together. I am dedicated to improving my skills 
                through practice and projects and always eager to learn new things in the field of web development.
              </p>
              <button
                className="btn btn-outline"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;

