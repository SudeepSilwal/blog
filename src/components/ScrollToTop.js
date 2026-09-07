'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return

      ticking = true

      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY

        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight

        let percentage = 0

        if (scrollHeight > 0) {
          percentage = (scrollTop / scrollHeight) * 100
        }

        percentage = Math.min(100, Math.max(0, percentage))

        setProgress(percentage)
        setVisible(scrollTop > 300)

        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

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
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top ${
        visible ? 'scroll-to-top-visible' : ''
      }`}
      aria-label={`Scroll to top. Reading progress ${Math.round(
        progress
      )}%`}
      style={{
        '--progress': `${progress}%`,
      }}
    >
      <span className="scroll-to-top-ring">
        <span className="scroll-to-top-inner">
          <span className="scroll-to-top-arrow">
            ↑
          </span>
        </span>
      </span>
    </button>
  )
}