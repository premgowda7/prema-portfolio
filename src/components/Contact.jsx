import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'premagowda579@gmail.com',
      href: 'mailto:premagowda579@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 63619 07544',
      href: 'tel:+916361907544'
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prema-gowda-gt',
      href: 'https://linkedin.com/in/prema-gowda-gt'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/premgowdagt',
      href: 'https://github.com/premgowdagt'
    }
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:premagowda579@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="section contact">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="title-number">06.</span>
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's work together!</h3>
            <p>
              I'm currently looking for opportunities in <strong>Software Development (SDE)</strong>,{' '}
              <strong>Full Stack Development</strong>, or <strong>DevOps Engineering</strong> roles. 
              Whether you have a project in mind, a question, or just want to connect – feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="contact-item glass-effect"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">
                    <item.icon />
                  </div>
                  <div className="contact-text">
                    <span>{item.label}</span>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass-effect"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label>Your Name</label>
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label>Your Email</label>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label>Subject</label>
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                placeholder=" "
                required
              ></textarea>
              <label>Your Message</label>
            </div>
            <motion.button 
              type="submit" 
              className="btn btn-primary submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
