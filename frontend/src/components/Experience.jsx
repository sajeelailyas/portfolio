import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import useMotionPresets from '../hooks/useMotionPresets';

const Experience = () => {
  const { fadeInUp, staggerContainer, staggerItem, chipHover } = useMotionPresets();

  const experiences = [
    {
      title: 'Web Intern - Frontend',
      company: 'Medical Imaging and Diagnostic Lab - NCAI',
      period: 'Sep 2025 - Nov 2025',
      type: 'internship',
      location: 'On-Site',
      responsibilities: [
        'Developed responsive and user-friendly frontend interfaces, improving usability and engagement.',
        'Implemented authentication systems including secure signup and Google login integration.',
        'Collaborated in a professional development environment following modern workflows.'
      ],
      experienceLetter: '/documents/ExperienceLetter.jpeg'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          {...fadeInUp}
        >
          <div className="section-header">
            <h2>Experience</h2>
            <motion.div
              className="section-content"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} className="experience-item" variants={staggerItem}>
                  <motion.span className="chip experience-chip" whileHover={chipHover}>
                    {exp.title} — {exp.company} ({exp.period}) — {exp.location}
                  </motion.span>
                  {exp.experienceLetter && (
                    <motion.a
                      href={exp.experienceLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip link"
                      style={{ marginLeft: '0.5rem' }}
                      whileHover={chipHover}
                    >
                      <FaExternalLinkAlt /> View Experience Letter
                    </motion.a>
                  )}
                  {index < experiences.length - 1 && <span className="sep">•</span>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

