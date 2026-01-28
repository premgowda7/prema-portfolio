import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBuilding, FaCode, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const experiences = [
    {
      title: 'Intern - DevOps & Software Development',
      company: 'PowerSchool Pvt Ltd, Bengaluru',
      date: 'Jul 2024 – Present',
      icon: FaBuilding,
      iconClass: 'devops',
      details: [
        'Built Python-based automated alerting and monitoring solutions, reducing incident response time by 70%',
        'Developed internal tools and scripts for automation using Python and Shell scripting',
        'Managed Jenkins CI/CD pipelines for reliable deployments across multiple environments',
        'Delivered RCA documentation and resolved L1/L2 production platform issues',
        'Performed log analysis, ticket triage, environment monitoring, and incident support for live systems',
        'Collaborated with development teams on deployment strategies and infrastructure improvements'
      ],
      tags: [
        { name: 'Python', type: 'dev' },
        { name: 'Jenkins', type: 'devops' },
        { name: 'AWS', type: 'devops' },
        { name: 'Monitoring', type: 'devops' },
        { name: 'Shell Scripting', type: 'dev' }
      ]
    },
    {
      title: 'Software Developer',
      company: 'Excerpt Technologies Pvt Ltd, Bengaluru',
      date: 'Aug 2022 – Aug 2023',
      icon: FaCode,
      iconClass: 'dev',
      details: [
        'Developed RESTful APIs and backend services using Java and Spring Boot framework',
        'Built responsive user interfaces using HTML, CSS, JavaScript, and React',
        'Worked with SQL databases (MySQL, PostgreSQL) for data modeling and query optimization',
        'Mentored 30+ interns in Java development, debugging, and best coding practices',
        'Conducted technical sessions on Java, web development, SDLC, and software design patterns',
        'Participated in code reviews and implemented clean code principles'
      ],
      tags: [
        { name: 'Java', type: 'dev' },
        { name: 'Spring Boot', type: 'dev' },
        { name: 'React', type: 'dev' },
        { name: 'SQL', type: 'dev' },
        { name: 'REST APIs', type: 'dev' },
        { name: 'Mentoring', type: '' }
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">02.</span>
          Work Experience
        </motion.h2>

        <div className="experience-container">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card glass-effect"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="exp-header">
                <div className={`exp-icon ${exp.iconClass}`}>
                  <exp.icon />
                </div>
                <div className="exp-info">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="exp-date">
                    <FaCalendarAlt /> {exp.date}
                  </span>
                </div>
              </div>

              <ul className="exp-details">
                {exp.details.map((detail, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <FaCheckCircle />
                    {detail}
                  </motion.li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className={`tag ${tag.type}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
