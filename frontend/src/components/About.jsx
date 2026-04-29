import { motion } from 'framer-motion';
import useMotionPresets from '../hooks/useMotionPresets';

const About = () => {
  const { fadeInUp, staggerContainer, staggerItem } = useMotionPresets();

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          {...fadeInUp}
        >
          <div className="section-header">
            <h2>About</h2>
            <motion.div
              className="about-content"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div className="about-bio" variants={staggerItem}>
                <h3>About Me</h3>
                <p>
                  I am a Software Engineering graduate from COMSATS University Islamabad, focused on building responsive and user-friendly web applications.
                  I enjoy turning ideas into practical products, improving code quality, and continuously growing through real projects.
                </p>
              </motion.div>

              <motion.div className="about-highlights" variants={staggerItem}>
                <div className="about-block">
                  <h3>Education</h3>
                  <p>
                    <strong>COMSATS University Islamabad</strong>, BS Software Engineering (2022 - 2026)
                  </p>
                  <p>
                    <strong>Public School & College Skardu</strong>, Intermediate - Pre-Engineering (2019 - 2021)
                  </p>
                  <p>
                    <strong>Public School & College Skardu</strong>, Matric - Pre-Medical (2017 - 2019)
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

