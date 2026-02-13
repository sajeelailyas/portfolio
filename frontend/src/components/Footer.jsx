import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;

