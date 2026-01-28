import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaBell, FaDollarSign, FaRocket, FaNetworkWired, FaServer, FaDatabase } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Full Stack E-Commerce API',
      description: 'Developed a complete RESTful API for e-commerce platform using Java Spring Boot with JWT authentication, product management, cart functionality, and order processing. Integrated with PostgreSQL database.',
      icon: FaServer,
      iconClass: 'dev',
      type: 'dev',
      badge: 'Full Stack',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'JWT'],
      github: '#',
      live: '#'
    },
    {
      title: 'PowerSchool Automation & Monitoring',
      description: 'Built automated alerting systems using Python and Jenkins, reducing incident response time by 70% and minimizing manual incident detection for production systems.',
      icon: FaBell,
      iconClass: 'devops',
      type: 'devops',
      badge: 'DevOps',
      tech: ['Python', 'Jenkins', 'CloudWatch', 'Shell'],
      github: '#',
      live: '#'
    },
    {
      title: 'Microservices Architecture Project',
      description: 'Designed and implemented a microservices-based application with Spring Boot, featuring service discovery, API gateway, and inter-service communication using REST and message queues.',
      icon: FaNetworkWired,
      iconClass: 'dev',
      type: 'dev',
      badge: 'Full Stack',
      tech: ['Spring Boot', 'Docker', 'REST', 'Microservices'],
      github: '#',
      live: '#'
    },
    {
      title: 'AWS Cost Optimization',
      description: 'Implemented automated EBS snapshot lifecycle management using AWS Lambda and CloudWatch Events to optimize cloud costs and improve resource management.',
      icon: FaDollarSign,
      iconClass: 'devops',
      type: 'devops',
      badge: 'Cloud',
      tech: ['AWS Lambda', 'CloudWatch', 'Python', 'IAM'],
      github: '#',
      live: '#'
    },
    {
      title: 'Database Management System',
      description: 'Built a comprehensive database solution with advanced SQL queries, stored procedures, triggers, and performance optimization. Implemented data modeling best practices.',
      icon: FaDatabase,
      iconClass: 'dev',
      type: 'dev',
      badge: 'Database',
      tech: ['MySQL', 'PostgreSQL', 'SQL', 'Data Modeling'],
      github: '#',
      live: '#'
    },
    {
      title: 'Progressive Delivery Pipeline',
      description: 'Implemented canary deployments using Kubernetes, Argo CD, and Istio for safer and more controlled production releases with automated rollback capabilities.',
      icon: FaRocket,
      iconClass: 'devops',
      type: 'devops',
      badge: 'DevOps',
      tech: ['Kubernetes', 'Argo CD', 'Istio', 'Helm'],
      github: '#',
      live: '#'
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter)

  return (
    <section id="projects" className="section projects">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">04.</span>
          Featured Projects
        </motion.h2>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'dev' ? 'active' : ''}`}
            onClick={() => setFilter('dev')}
          >
            Development
          </button>
          <button 
            className={`filter-btn ${filter === 'devops' ? 'active' : ''}`}
            onClick={() => setFilter('devops')}
          >
            DevOps & Cloud
          </button>
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="project-card glass-effect"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <span className={`project-badge ${project.iconClass}`}>
                  {project.badge}
                </span>
                <div className="project-glow"></div>
                
                <div className={`project-icon ${project.iconClass}`}>
                  <project.icon />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
