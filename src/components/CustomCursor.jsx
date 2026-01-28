import React, { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setIsVisible(true)
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2
      cursorY += (mouseY - cursorY) * 0.2
      
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1

      if (cursor) {
        cursor.style.left = cursorX + 'px'
        cursor.style.top = cursorY + 'px'
      }

      if (follower) {
        follower.style.left = followerX + 'px'
        follower.style.top = followerY + 'px'
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    animate()

    // Add hover effect for interactive elements
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-category, .tech-icon')
    
    const onHoverEnter = () => follower?.classList.add('hover')
    const onHoverLeave = () => follower?.classList.remove('hover')

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', onHoverEnter)
      el.addEventListener('mouseleave', onHoverLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <>
      <div 
        ref={cursorRef} 
        className="cursor" 
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div 
        ref={followerRef} 
        className="cursor-follower" 
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  )
}

export default CustomCursor
