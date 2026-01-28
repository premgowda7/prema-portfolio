import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">&lt;PG/&gt;</div>
        <p>Full Stack Developer & DevOps Engineer</p>
        <p>Building scalable applications & automating deployments</p>
        
        <div className="footer-social">
          <a href="https://linkedin.com/in/prema-gowda-gt" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/premgowdagt" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:premagowda579@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        
        <p className="copyright">
          Designed & Built with <FaHeart style={{ color: '#ff6b6b', verticalAlign: 'middle' }} /> by Prema Gowda G T
        </p>
        <p className="copyright">
          &copy; 2026 All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
