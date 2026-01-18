import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Intern - Frontend',
      company: 'Medical Imaging and Diagnostic Lab - NCAI',
      period: 'September 2025 - November 2025',
      type: 'internship',
      location: 'On-Site',
      responsibilities: [
        'Developed the frontend of a web project, including responsive landing pages.',
        'Developed user authentication features including signup and login with Google.'
      ],
      experienceLetter: '/documents/ExperienceLetter.jpeg'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Experience</h2>
            <div className="section-content">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <span className="chip experience-chip">
                    {exp.title} — {exp.company} ({exp.period}) — {exp.location}
                  </span>
                  {exp.experienceLetter && (
                    <a
                      href={exp.experienceLetter}
                      download
                      className="chip link"
                      style={{ marginLeft: '0.5rem' }}
                    >
                      <FaFileDownload /> Experience Letter
                    </a>
                  )}
                  {index < experiences.length - 1 && <span className="sep">•</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

