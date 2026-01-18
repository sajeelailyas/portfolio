import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import apiClient from '../config/axios';

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
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to default projects if API fails
      setProjects([
        {
          _id: '1',
          title: 'AutoVisionHub',
          description: 'An AI-based automotive marketplace and community platform with AR visualization, AI chatbot, and marketplace features.',
          technologies: ['Flutter', 'Firebase', 'AI'],
          githubLink: 'https://github.com/sajeelailyas/AutoVisionHub',
          featured: true
        },
        {
          _id: '2',
          title: 'Budget Tracker',
          description: 'A Java OOP desktop app to manage income/expenses and calculate remaining balance.',
          technologies: ['Java', 'OOP'],
          githubLink: 'https://github.com/sajeelailyas/BudgetTracker'
        },
        {
          _id: '3',
          title: 'EmotiCam',
          description: 'Real-time app that detects facial expressions via webcam and generates emoticons.',
          technologies: ['Python', 'OpenCV'],
          githubLink: 'https://github.com/sajeelailyas/EmotiCam'
        },
        {
          _id: '4',
          title: 'Eventify',
          description: 'Online platform for booking event decoration services.',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/sajeelailyas/Eventify'
        },
        {
          _id: '5',
          title: 'Blood Donation System',
          description: 'Hybrid system using SQL + MongoDB to manage donors, recipients, inventory, and transfusions.',
          technologies: ['SQL', 'MongoDB'],
          githubLink: 'https://github.com/sajeelailyas/BloodDonationSystem'
        }
      ]);
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

