import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import useMotionPresets from '../hooks/useMotionPresets';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import useTypewriter from './Hero/useTypewriter';

const Hero = () => {
  const { fadeInRight, staggerContainer, staggerItem } = useMotionPresets();
  const role = useTypewriter(['Software Engineer', 'Frontend Developer', 'Full Stack Developer'], {
    typeSpeed: 55,
    deleteSpeed: 35,
    pauseMs: 850,
  });

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.2 }}
          >
            <motion.h1 variants={staggerItem}>
              Hi, I'm <span className="gradient-text">Sajeela Ilyas</span>
            </motion.h1>
            <motion.h2 variants={staggerItem}>
              <span className="type-text">{role}</span>
              <span className="type-cursor" aria-hidden="true">
                |
              </span>
            </motion.h2>
            <motion.p variants={staggerItem}>
              I build responsive web apps with React and the MERN stack, with a focus on clean UI, practical problem-solving, and continuous learning.
            </motion.p>
            <motion.div className="hero-cta" variants={staggerItem}>
              <a href="#projects" className="btn btn-primary">
                View Projects <FaArrowRight />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </motion.div>

            <motion.div className="follow-row" variants={staggerItem}>
              <div className="follow-label">Follow Me</div>
              <div className="follow-links">
                <motion.a
                  href="https://github.com/sajeelailyas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follow-link"
                  whileHover={{ y: -3, scale: 1.06 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sajeelailyas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follow-link"
                  whileHover={{ y: -3, scale: 1.06 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sajeelailyas@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follow-link"
                  whileHover={{ y: -3, scale: 1.06 }}
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={fadeInRight.initial}
            whileInView={fadeInRight.whileInView}
            viewport={fadeInRight.viewport}
            transition={{ ...fadeInRight.transition, delay: 0.15 }}
            whileHover={{ y: -8, rotate: -1 }}
          >
            <div className="image-wrapper">
              <img src="/assets/sajju.jpg" alt="Sajeela Ilyas" />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

