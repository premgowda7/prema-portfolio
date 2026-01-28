import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAws, FaCertificate, FaLayerGroup } from 'react-icons/fa'

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const certifications = [
    {
      title: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      icon: FaAws,
      color: '#FF9900'
    },
    {
      title: 'AWS Cloud Architecting',
      issuer: 'Amazon Web Services',
      icon: FaAws,
      color: '#FF9900'
    },
    {
      title: 'Full Stack Java Development',
      issuer: 'J Spiders',
      icon: FaLayerGroup,
      color: '#6c63ff'
    }
  ]

  return (
    <section id="certifications" className="section certifications">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">05.</span>
          Certifications
        </motion.h2>

        <div className="cert-container">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="cert-card glass-effect"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="cert-icon"
                style={{ background: `linear-gradient(135deg, ${cert.color}40 0%, ${cert.color}20 100%)` }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <cert.icon style={{ color: cert.color }} />
              </motion.div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              <motion.div 
                className="cert-badge"
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCertificate />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
