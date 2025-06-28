import React from 'react';
import '../css/skills.css';
import skillsimg from '../assets/img/work3.jpg';

import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiJavascript, SiFlutter, SiTailwindcss, SiFlask, SiFirebase, SiBootstrap } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { MdMemory } from 'react-icons/md'; // for ML


const skillSet = [
  { icon: <FaReact />, label: 'React' },
  { icon: <SiDjango />, label: 'Django' },
  { icon: <SiFlask />, label: 'Flask' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <MdMemory />, label: 'Machine Learning' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
  { icon: <FaGitAlt />, label: 'Git' },
  { icon: <SiTailwindcss />, label: 'Tailwind' },
  { icon: <SiBootstrap />, label: 'Bootstrap' },
  { icon: <SiFlutter />, label: 'Flutter' },
  { icon: <FaLinux />, label: 'Linux' },
  { icon: <FaDatabase />, label: 'DBMS' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <VscCode />, label: 'VS Code' },
];


const Skills = () => {
  const repeatedSkills = [...skillSet, ...skillSet]; // double for looping

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-subtitle">Professional Skills</h2>

        <div className="skills-bottom">
          <div className="skills-text">
            As a passionate Computer Science Engineering student at NBKRIST, I specialize in building responsive and intuitive applications. I focus on performance, clean UI/UX, and leveraging modern technologies to deliver seamless user experiences across platforms.
          </div>

          <div className="skills-image">
            <img src={skillsimg} alt="Skill Visual" className="image" />
          </div>
        </div>

        <div className="skill-slider">
          <div className="skill-track">
            {repeatedSkills.map((skill, index) => (
              <div className="skill-tile" key={index}>
                <span className="icon">{skill.icon}</span>
                <span className="label">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
