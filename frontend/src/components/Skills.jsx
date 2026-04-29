import { motion } from 'framer-motion';
import { useState } from 'react';
import useMotionPresets from '../hooks/useMotionPresets';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Programming & Development');
  const [visibleCount, setVisibleCount] = useState(10);
  const { fadeInUp, staggerContainer, staggerItem, chipHover } = useMotionPresets();

  const programmingSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Flutter', 'Dart', 'Firebase', 'Java (OOP)'];
  const toolsSkills = ['VS Code', 'Android Studio', 'Git/GitHub', 'Postman', 'JIRA', 'Selenium', 'Cypress'];
  const testingSkills = ['Manual Testing', 'Automated Testing', 'Test Case Design', 'Regression Testing', 'Bug Reporting'];
  const documentationSkills = ['Software & Technical Documentation', 'Test Plans', 'Test Cases'];
  const softSkills = ['Communication', 'Problem Solving', 'Analytical Thinking', 'Time Management', 'Adaptability', 'Leadership'];
  const otherSkills = ['Prompt Engineering', 'AI Integration', 'Basic Machine Learning Concepts', 'Data Analysis'];

  const skillTabs = [
    { id: 'Programming & Development', label: 'Programming & Development' },
    { id: 'Tools & Technologies', label: 'Tools & Technologies' },
    { id: 'Testing & QA', label: 'Testing & QA' },
    { id: 'Documentation', label: 'Documentation' },
    { id: 'Soft Skills', label: 'Soft Skills' },
    { id: 'Other Skills', label: 'Other Skills' },
  ];

  const tabSkills =
    activeTab === 'Programming & Development'
      ? programmingSkills
      : activeTab === 'Tools & Technologies'
        ? toolsSkills
        : activeTab === 'Testing & QA'
          ? testingSkills
          : activeTab === 'Documentation'
            ? documentationSkills
            : activeTab === 'Soft Skills'
              ? softSkills
              : otherSkills;

  const visibleSkills = tabSkills.slice(0, visibleCount);
  const canLoadMore = visibleCount < tabSkills.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, tabSkills.length));
  };

  const onChangeTab = (nextTab) => {
    setActiveTab(nextTab);
    setVisibleCount(10);
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          {...fadeInUp}
        >
          <div className="section-header">
            <h2>Skills</h2>
            <motion.div
              className="section-content skills-section-content"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="skills-tabs" role="tablist" aria-label="Skills categories">
                {skillTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onChangeTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="chips-container">
                {visibleSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="chip"
                    variants={staggerItem}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={chipHover}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {canLoadMore && (
                <motion.div className="load-more-row" variants={staggerItem}>
                  <button type="button" className="btn btn-secondary" onClick={loadMore}>
                    Load More Skills
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
