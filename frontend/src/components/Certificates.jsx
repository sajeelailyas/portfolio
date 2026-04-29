import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFilePdf, FaImage } from 'react-icons/fa';
import useMotionPresets from '../hooks/useMotionPresets';

const certificates = [
  {
    id: 'ccna-intro-to-networks',
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    file: '/certificates/CCNAv7-IntroToNetworks.pdf',
  },
  {
    id: 'deep-learning-essential-keras',
    title: 'Deep Learning Essentials with Keras',
    issuer: 'IBM / Coursera',
    file: '/certificates/DeepLearningEssentialWithKeras.pdf',
  },
  {
    id: 'flutter-development-internship',
    title: 'Flutter Development Internship',
    issuer: 'Internship Program',
    file: '/certificates/FlutterDevelopmentInternship.pdf',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    issuer: 'Professional Certificate',
    file: '/certificates/GenerativeAI.pdf',
  },
  {
    id: 'google-advanced-data-analytics',
    title: 'Google Advanced Data Analytics',
    issuer: 'Google / Coursera',
    file: '/certificates/GoogleAdvancedDataAnalyticsCertificate.pdf',
  },
  {
    id: 'google-data-analytics-professional',
    title: 'Google Data Analytics Professional',
    issuer: 'Google / Coursera',
    file: '/certificates/GoogleDataAnalyticsProfessionalCertificate_Badge20250213-28-1zh93d.pdf',
  },
];

const isPdfFile = (file) => file.toLowerCase().endsWith('.pdf');

const Certificates = () => {
  const { fadeInUp, staggerContainer, staggerItem, cardHover } = useMotionPresets();

  return (
    <section id="certificates" className="section">
      <div className="container">
        <motion.div className="section-box" {...fadeInUp}>
          <div className="section-header">
            <h2>Certificates</h2>
            <motion.div
              className="certificates-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
            >
              {certificates.map((certificate) => (
                <motion.article
                  key={certificate.id}
                  className="certificate-card"
                  variants={staggerItem}
                  whileHover={cardHover}
                >
                  <div className="certificate-meta">
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                  </div>
                  <div className="certificate-preview">
                    {isPdfFile(certificate.file) ? (
                      <span className="certificate-icon" aria-hidden="true">
                        <FaFilePdf />
                      </span>
                    ) : (
                      <img
                        src={certificate.file}
                        alt={`${certificate.title} certificate`}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {isPdfFile(certificate.file) ? <FaExternalLinkAlt /> : <FaImage />}
                    View Certificate
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
