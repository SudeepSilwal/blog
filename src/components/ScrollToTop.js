'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? 'scroll-to-top-visible' : ''}`}
      aria-label="Scroll to top"
    >
      <span className="scroll-to-top-ring" />
      <span className="scroll-to-top-arrow">↑</span>
    </button>
  )
}