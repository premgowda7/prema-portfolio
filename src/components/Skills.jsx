import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaCode, FaCloud, FaDatabase, FaTools, FaServer, FaShieldAlt,
  FaJava, FaPython, FaReact, FaAws, FaDocker, FaGitAlt, FaLinux, FaJs, FaHtml5
} from 'react-icons/fa'
import { 
  SiSpringboot, SiPostgresql, SiMysql, SiKubernetes, SiJenkins, 
  SiApachekafka, SiRedis, SiMongodb, SiTypescript
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeTab, setActiveTab] = useState('all')

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: FaServer,
      type: 'dev',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Microservices', level: 70 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: FaCode,
      type: 'dev',
      skills: [
        { name: 'React', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'TypeScript', level: 65 },
      ]
    },
    {
      title: 'Database & Storage',
      icon: FaDatabase,
      type: 'dev',
      skills: [
        { name: 'SQL (MySQL/PostgreSQL)', level: 80 },
        { name: 'MongoDB', level: 65 },
        { name: 'Redis', level: 60 },
        { name: 'Database Design', level: 75 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      type: 'devops',
      skills: [
        { name: 'AWS (EC2, S3, VPC, Lambda)', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 65 },
        { name: 'CI/CD (Jenkins)', level: 80 },
      ]
    },
    {
      title: 'Monitoring & Reliability',
      icon: FaTools,
      type: 'devops',
      skills: [
        { name: 'CloudWatch', level: 80 },
        { name: 'Monitoring & Alerting', level: 85 },
        { name: 'Incident Response', level: 80 },
        { name: 'RCA & Troubleshooting', level: 75 },
      ]
    },
    {
      title: 'Tools & Practices',
      icon: FaShieldAlt,
      type: 'devops',
      skills: [
        { name: 'Git & Version Control', level: 85 },
        { name: 'Linux/Shell Scripting', level: 75 },
        { name: 'Python (Automation)', level: 80 },
        { name: 'Jira & Agile', level: 75 },
      ]
    }
  ]

  const techIcons = [
    { Icon: FaJava, name: 'Java', type: 'dev' },
    { Icon: SiSpringboot, name: 'Spring Boot', type: 'dev' },
    { Icon: FaPython, name: 'Python', type: 'both' },
    { Icon: FaReact, name: 'React', type: 'dev' },
    { Icon: FaJs, name: 'JavaScript', type: 'dev' },
    { Icon: SiTypescript, name: 'TypeScript', type: 'dev' },
    { Icon: FaHtml5, name: 'HTML/CSS', type: 'dev' },
    { Icon: SiPostgresql, name: 'PostgreSQL', type: 'dev' },
    { Icon: SiMysql, name: 'MySQL', type: 'dev' },
    { Icon: SiMongodb, name: 'MongoDB', type: 'dev' },
    { Icon: FaAws, name: 'AWS', type: 'devops' },
    { Icon: FaDocker, name: 'Docker', type: 'devops' },
    { Icon: SiKubernetes, name: 'Kubernetes', type: 'devops' },
    { Icon: SiJenkins, name: 'Jenkins', type: 'devops' },
    { Icon: FaGitAlt, name: 'Git', type: 'both' },
    { Icon: FaLinux, name: 'Linux', type: 'devops' },
  ]

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.type === activeTab)

  const filteredIcons = activeTab === 'all'
    ? techIcons
    : techIcons.filter(icon => icon.type === activeTab || icon.type === 'both')

  return (
    <section id="skills" className="section skills">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">03.</span>
          Skills & Technologies
        </motion.h2>

        <motion.p 
          className="skills-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A versatile skill set spanning full-stack development and DevOps, enabling me to build 
          applications from concept to production deployment.
        </motion.p>

        <motion.div 
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button 
            className={`skill-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </button>
          <button 
            className={`skill-tab ${activeTab === 'dev' ? 'active dev' : ''}`}
            onClick={() => setActiveTab('dev')}
          >
            Development
          </button>
          <button 
            className={`skill-tab ${activeTab === 'devops' ? 'active devops' : ''}`}
            onClick={() => setActiveTab('devops')}
          >
            DevOps & Cloud
          </button>
        </motion.div>

        <div className="skills-container">
          {filteredCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category glass-effect"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="skill-header">
                <category.icon />
                <h3>{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className={`skill-progress ${category.type}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="tech-icons"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {filteredIcons.map((item, index) => (
            <motion.div 
              key={index}
              className="tech-icon"
              whileHover={{ scale: 1.1, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
            >
              <item.Icon />
              <span className="tooltip">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
