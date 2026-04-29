import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import useMotionPresets from '../hooks/useMotionPresets';

const Footer = () => {
  const { fadeInUp } = useMotionPresets();

  return (
    <motion.footer className="footer" {...fadeInUp}>
      <div className="container">
        <p>
          © All rights reserved.
          {' · '}
          <a
            href="https://github.com/sajeelailyas/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub /> Source on GitHub
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

