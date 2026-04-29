import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import apiClient from '../config/axios';
import useMotionPresets from '../hooks/useMotionPresets';

// Fallback projects shown when the API fails
// or returns an empty list (e.g. database not seeded yet)
const fallbackProjects = [
  {
    _id: '1',
    title: 'AutoVisionHub - FYP',
    description:
      'AutoVisionHub is an AI-powered automotive marketplace and community platform designed to connect vehicle enthusiasts and simplify buying, selling, and exploring automotive parts. It includes AR-based part visualization for real-world previews, a Flutter frontend for smooth user experience, and a Node.js backend for scalable server-side operations and database management.',
    technologies: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    githubLink: 'https://github.com/sajeelailyas/AutoVisionHub',
    featured: true,
  },
  {
    _id: '2',
    title: 'Blood Donation System (Semester Project - Database) - SQL',
    description:
      'A blood management system developed to manage donors, blood records, and hospital requirements efficiently. The SQL-based version operates through a command-line interface for structured data management and reliable retrieval in emergency scenarios.',
    technologies: ['Java', 'SQL', 'MySQL', 'JDBC', 'CMD'],
    githubLink: 'https://github.com/sajeelailyas/blood-management-system',
    featured: false,
  },
  {
    _id: '3',
    title: 'Blood Donation System (Semester Project - Database) - MongoDB',
    description:
      'A GUI-based blood management system implemented with MongoDB, focused on advanced operations such as aggregation pipelines for efficient processing. This NoSQL implementation complements the SQL version and demonstrates handling of both relational and non-relational databases.',
    technologies: ['Java', 'MongoDB', 'Java Swing', 'NoSQL'],
    githubLink: 'https://github.com/sajeelailyas/BloodManagmentSys_MongoDB',
    featured: false,
  },
  {
    _id: '4',
    title: 'RX-Scan (Internship Project)',
    description:
      'Designed and developed responsive frontend interfaces for a medical lab management system, including a modern landing page. Implemented Google Sign-In/Sign-Up for user authentication and focused on creating a clean, user-friendly UI to improve accessibility and overall user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubLink: 'https://github.com/sajeelailyas/midl-internship',
    featured: false,
  },
  {
    _id: '5',
    title: 'Budget Tracker App',
    description: 'A user-friendly GUI budget tracking app using Java OOP. Semester Project.',
    technologies: ['Java', 'OOP', 'GUI'],
    githubLink: 'https://github.com/sajeelailyas/budgetTracker',
    featured: false,
  },
  {
    _id: '6',
    title: 'Eventify - Event Management System (Semester Project - Web Development)',
    description: 'A static frontend website for an event management business, featuring pages like Home, About, Contact, Gallery, Testimonials, and Event Types. The project focuses on clean UI design and smooth navigation to showcase services and improve user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/sajeelailyas/eventify',
    featured: false,
  },
  {
    _id: '7',
    title: 'GB Travel Hub - Gilgit-Baltistan Tourism Platform',
    description:
      'A region-focused platform for Gilgit-Baltistan that allows users to explore tourist destinations, search locations, and view detailed place information. Implemented dynamic search functionality and structured data handling to improve navigation and user experience.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/sajeelailyas/GBTravelHub',
    featured: false,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fadeInUp, staggerContainer, staggerItem, cardHover, chipHover, modalOverlay, modalContent } = useMotionPresets();
  const [visibleCount, setVisibleCount] = useState(7);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await apiClient.get('/api/projects');
      const data = Array.isArray(response.data) ? response.data : [];

      // If the API returns an empty array, fall back to local data
      setProjects(data.length > 0 ? data : fallbackProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to default projects if API fails
      setProjects(fallbackProjects);
    } finally {
      setLoading(false);
    }
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const canLoadMore = visibleCount < projects.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 7, projects.length));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          {...fadeInUp}
        >
          <div className="section-header">
            <h2>Projects</h2>
            {loading ? (
              <p>Loading projects...</p>
            ) : (
              <motion.div
                className="projects-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
              >
                {visibleProjects.map((project) => (
                  <motion.div
                    key={project._id}
                    className="project-card"
                    variants={staggerItem}
                    whileHover={cardHover}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      {project.featured && <span className="featured-badge">⭐ Featured</span>}
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies?.map((tech, index) => (
                        <motion.span key={index} className="tech-tag" whileHover={chipHover}>{tech}</motion.span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ x: 5 }}
                        >
                          <FaGithub /> GitHub
                        </motion.a>
                      )}
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ x: 5 }}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {!loading && canLoadMore && (
              <motion.div className="load-more-row" variants={staggerItem}>
                <button type="button" className="btn btn-secondary" onClick={loadMore}>
                  Load More Projects
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
          {...modalOverlay}
        >
          <motion.div
            className="modal"
            {...modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="project-tech">
                {selectedProject.technologies?.map((tech, index) => (
                  <motion.span key={index} className="tech-tag" whileHover={chipHover}>{tech}</motion.span>
                ))}
              </div>
              <div className="modal-actions">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                <button
                  className="btn btn-outline"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

