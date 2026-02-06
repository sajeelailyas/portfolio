import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import apiClient from '../config/axios';

// Fallback projects shown when the API fails
// or returns an empty list (e.g. database not seeded yet)
const fallbackProjects = [
  {
    _id: '1',
    title: 'AutoVisionHub',
    description:
      'An AI-based automotive marketplace and community platform with AR part visualization. Frontend: Flutter, Backend: Node.js. Final Year Project.',
    technologies: ['Flutter', 'Node.js', 'AI', 'AR'],
    githubLink: 'https://github.com/HarisAli-dev/AutoVisionHub',
    featured: true,
  },
  {
    _id: '2',
    title: 'Blood Donation System (SQL)',
    description:
      'A CMD-based blood management system using SQL for managing donors, recipients, inventory, and transfusions with secure admin controls. Semester Project.',
    technologies: ['Java', 'MySQL', 'JDBC', 'CMD'],
    githubLink: 'https://github.com/sajeelailyas/blood-management-system',
    featured: false,
  },
  {
    _id: '3',
    title: 'Blood Donation System (MongoDB)',
    description:
      'A GUI-based blood management system using MongoDB and Java Swing for managing donors, recipients, blood banks, donations, and transfusion records. Semester Project.',
    technologies: ['Java', 'MongoDB', 'Java Swing', 'NoSQL'],
    githubLink: 'https://github.com/sajeelailyas/BloodManagmentSys_MongoDB',
    featured: false,
  },
  {
    _id: '4',
    title: 'MIDL Internship Project',
    description:
      'Web development internship project at Medical and Diagnostic Lab - NCAI. Developed frontend including responsive landing pages and user authentication with Google sign-in.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Google Auth'],
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
    title: 'Eventify',
    description: 'An online platform for booking elegant event decoration services. Semester Project.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/sajeelailyas/eventify',
    featured: false,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Projects</h2>
            {loading ? (
              <p>Loading projects...</p>
            ) : (
              <div className="projects-grid">
                {projects.map((project) => (
                  <motion.div
                    key={project._id}
                    className="project-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      {project.featured && <span className="featured-badge">⭐ Featured</span>}
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies?.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="project-tech">
                {selectedProject.technologies?.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
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
        </div>
      )}
    </section>
  );
};

export default Projects;

