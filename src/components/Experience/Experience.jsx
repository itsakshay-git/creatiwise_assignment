import React from 'react';
import starIcon from '../../assets/logo/Star.svg';
import './experience.css';

const experiences = [
  {
    role: 'Lead Product Designer',
    company: 'Fortknox',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'Intern Designer',
    company: 'OmniSafe',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'UI Designer',
    company: 'Doradesign',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'Frontend Developer',
    company: 'OpacityAuthor',
    duration: 'Mar 2022 – Oct 2023',
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-header">
        <h2>
          <img src={starIcon} alt="star" className="star-icon" /> Experience
        </h2>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-role">{exp.role}</div>
            <div className="experience-meta">
              <div className="experience-company">{exp.company}</div>
              <div className="experience-duration">{exp.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
