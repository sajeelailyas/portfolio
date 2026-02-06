import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm <span className="gradient-text">Sajeela Ilyas</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Software Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I am Sajeela Ilyas, a motivated and detail-oriented Software Engineer with a Bachelor's degree in Software Engineering 
              from COMSATS University Islamabad. I am passionate about web development and skilled in front-end technologies such as 
              HTML, CSS, JavaScript, and React, while also working with the MERN stack. I enjoy building user-friendly and responsive 
              web applications and understanding how different parts of a website work together. I am dedicated to improving my skills 
              through practice and projects and always eager to learn new things in the field of web development.
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects <FaArrowRight />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
              <a
                href="/documents/CV_SajeelaIlyas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FaDownload /> View CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
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

