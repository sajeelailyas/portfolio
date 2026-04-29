import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import useMotionPresets from '../hooks/useMotionPresets';
import useActiveSection from './Navbar/useActiveSection';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { staggerContainer, staggerItem, chipHover } = useMotionPresets();
  const activeId = useActiveSection(['home', 'about', 'experience', 'skills', 'projects', 'certificates', 'contact'], {
    fallbackId: 'home',
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <a href="#home" className="brand">
          <div className="brand-text">
            <span className="brand-name">Sajeela Ilyas</span>
            <span className="brand-subtitle">Software Engineer</span>
          </div>
        </a>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <motion.ul variants={staggerContainer} initial="hidden" animate="show">
            {navItems.map((item) => (
              <motion.li key={item.href} variants={staggerItem}>
                <motion.a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${activeId === item.href.replace('#', '') ? 'active' : ''}`}
                  whileHover={chipHover}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="nav-actions">
          <motion.a
            href="https://github.com/sajeelailyas"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github"
            aria-label="GitHub profile"
            whileHover={{ y: -2, scale: 1.07 }}
          >
            <FaGithub />
          </motion.a>
          <motion.button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            whileHover={{ rotate: 15, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
          </motion.button>
          <motion.button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.94 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

