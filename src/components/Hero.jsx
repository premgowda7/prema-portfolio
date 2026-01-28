import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPaperPlane, FaArrowRight, FaCode, FaCloud } from 'react-icons/fa'
import { 
  FaAws, FaDocker, FaJava, FaReact, FaPython, FaDatabase, FaGitAlt 
} from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const floatingIcons = [
    { Icon: FaAws, color: '#FF9900' },
    { Icon: FaDocker, color: '#2496ED' },
    { Icon: FaJava, color: '#007396' },
    { Icon: FaReact, color: '#61DAFB' },
    { Icon: FaPython, color: '#3776AB' },
    { Icon: SiSpringboot, color: '#6DB33F' },
    { Icon: FaDatabase, color: '#336791' },
    { Icon: FaGitAlt, color: '#F05032' },
  ]

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.p className="greeting" variants={itemVariants}>
            Hello, I'm
          </motion.p>
          
          <motion.h1 className="name" variants={itemVariants}>
            Prema Gowda G T
          </motion.h1>

          <motion.div className="typing-container" variants={itemVariants}>
            <span className="static-text">I'm a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'DevOps Engineer',
                2000,
                'Java Developer',
                2000,
                'Cloud Engineer',
                2000,
                'Software Engineer',
                2000,
                'Backend Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="dynamic-text"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div className="role-badges" variants={itemVariants}>
            <div className="role-badge developer">
              <FaCode /> Software Development
            </div>
            <div className="role-badge devops">
              <FaCloud /> DevOps & Cloud
            </div>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Full Stack Developer & DevOps Engineer with expertise in <strong>Java, Spring Boot, 
            RESTful APIs, SQL databases</strong>, and <strong>AWS cloud services</strong>. 
            Building scalable applications and automating deployments for production environments.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              <span>Get In Touch</span>
              <FaPaperPlane />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
              <span>View Projects</span>
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            <a href="https://linkedin.com/in/prema-gowda-gt" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/premgowdagt" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="mailto:premagowda579@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="visual-container">
            <div className="floating-icons">
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="float-icon"
                  style={{ color: item.color }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut'
                  }}
                >
                  <item.Icon />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="code-window"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="code-header">
                <div className="code-dot red"></div>
                <div className="code-dot yellow"></div>
                <div className="code-dot green"></div>
              </div>
              <div className="code-body">
                <div className="code-line">
                  <span className="code-keyword">class</span>{' '}
                  <span className="code-function">Developer</span> {'{'}
                </div>
                <div className="code-line">
                  {'  '}<span className="code-variable">name</span> = <span className="code-string">"Prema"</span>;
                </div>
                <div className="code-line">
                  {'  '}<span className="code-variable">skills</span> = [
                </div>
                <div className="code-line">
                  {'    '}<span className="code-string">"Java"</span>,
                </div>
                <div className="code-line">
                  {'    '}<span className="code-string">"Spring Boot"</span>,
                </div>
                <div className="code-line">
                  {'    '}<span className="code-string">"AWS"</span>,
                </div>
                <div className="code-line">
                  {'    '}<span className="code-string">"DevOps"</span>
                </div>
                <div className="code-line">
                  {'  '}];
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection('about')}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  )
}

export default Hero
