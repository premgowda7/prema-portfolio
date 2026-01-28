import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    { number: 70, suffix: '%', label: 'Incident Response Improvement' },
    { number: 30, suffix: '+', label: 'Interns Mentored' },
    { number: 2, suffix: '+', label: 'Years Experience' },
  ]

  const education = [
    {
      date: '2024 - Present',
      degree: 'M.E. in Cloud Computing',
      school: 'MIT Manipal'
    },
    {
      date: '2018 - 2022',
      degree: 'B.E. in Computer Science',
      school: 'KIT Tiptur'
    }
  ]

  return (
    <section id="about" className="section about">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">01.</span>
          About Me
        </motion.h2>

        <div className="about-content">
          <div className="about-text">
            <motion.div 
              className="about-card glass-effect"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Career Objective</h3>
              <p>
                <span className="highlight-dev">Full Stack Software Engineer</span> with strong expertise in{' '}
                <span className="highlight-dev">Java, Spring Boot, RESTful APIs, SQL databases, and microservices architecture</span>.
                Combined with <span className="highlight-devops">DevOps and Cloud experience</span> in AWS, CI/CD automation, 
                containerization, and infrastructure monitoring.
              </p>
              <p>
                Skilled in end-to-end application development from <span className="highlight-dev">backend API design</span> to 
                <span className="highlight-devops"> deployment and operations</span> in production environments. Proven experience 
                in building scalable applications, maintaining production systems, conducting root cause analysis (RCA), 
                and continuously improving system stability and performance.
              </p>
              <p>
                Seeking a <span className="highlight">Software Development Engineer (SDE)</span>,{' '}
                <span className="highlight">Full Stack Developer</span>, or{' '}
                <span className="highlight">DevOps Engineer</span> role in a production-scale environment.
              </p>
            </motion.div>

            <div className="stats-container">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card glass-effect"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <CountUp 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    inView={inView} 
                  />
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="education-timeline"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="timeline-title">
              <FaGraduationCap /> Education
            </h3>
            <div className="timeline">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-effect">
                    <span className="timeline-date">{item.date}</span>
                    <h4>{item.degree}</h4>
                    <p>{item.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Counter component
const CountUp = ({ end, suffix, inView }) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, end])

  return <div className="stat-number">{count}{suffix}</div>
}

export default About
