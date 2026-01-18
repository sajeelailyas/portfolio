import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const technicalSkills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 
    'MongoDB (Cloud-Atlas)', 'Flutter', 'Dart', 'Firebase', 'Java (OOP)'
  ];

  const tools = [
    'Visual Studio Code', 'Android Studio', 'Git/GitHub', 'MS Office Suite', 
    'Google Workspace', 'Selenium WebDriver', 'Cypress', 'JIRA'
  ];

  const testingQA = [
    'Automated Testing', 'Manual Testing', 'Test Case Design & Execution'
  ];

  const documentation = [
    'Software Requirements Specification (SRS)', 'Test Plans', 'Test Cases', 'Project Proposals'
  ];

  const softSkills = [
    'Communication', 'Time Management', 'Problem Solving', 'Quick Learning'
  ];

  const allSkills = [
    ...technicalSkills.map(s => ({ name: s, category: 'Technical' })),
    ...tools.map(s => ({ name: s, category: 'Tools' })),
    ...testingQA.map(s => ({ name: s, category: 'Testing & QA' })),
    ...documentation.map(s => ({ name: s, category: 'Documentation' })),
    ...softSkills.map(s => ({ name: s, category: 'Soft' }))
  ];

  const filteredSkills = allSkills.filter(skill =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Skills</h2>
            <div className="section-content">
              <div className="skills-group">
                <strong className="label">Technical:</strong>
                {technicalSkills.map((skill, index) => (
                  <span key={index} className="chip">{skill}</span>
                ))}
              </div>
              <div className="skills-group">
                <strong className="label">Tools:</strong>
                {tools.map((tool, index) => (
                  <span key={index} className="chip">{tool}</span>
                ))}
              </div>
              <div className="skills-group">
                <strong className="label">Testing & QA:</strong>
                {testingQA.map((skill, index) => (
                  <span key={index} className="chip">{skill}</span>
                ))}
              </div>
              <div className="skills-group">
                <strong className="label">Documentation:</strong>
                {documentation.map((skill, index) => (
                  <span key={index} className="chip">{skill}</span>
                ))}
              </div>
              <div className="skills-group">
                <strong className="label">Soft:</strong>
                {softSkills.map((skill, index) => (
                  <span key={index} className="chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="filter-row">
            <input
              type="text"
              placeholder="Filter skills (e.g., Flutter)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="filter-input"
            />
          </div>

          {searchQuery && (
            <div className="filtered-results">
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill, index) => (
                  <span key={index} className="chip">
                    {skill.name} <span className="chip-category">({skill.category})</span>
                  </span>
                ))
              ) : (
                <p className="no-results">No skills found matching "{searchQuery}"</p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
