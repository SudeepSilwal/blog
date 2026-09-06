'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        flex h-12 w-16 items-center justify-center
        rounded-lg border border-border
        bg-background text-xl font-bold

        shadow-[0_7px_0_rgba(0,0,0,0.18),0_12px_25px_rgba(0,0,0,0.15)]

        animate-float

        transition-all duration-300 ease-out

        hover:-translate-y-2
        hover:scale-105
        hover:rotate-2
        hover:shadow-[0_12px_0_rgba(0,0,0,0.18),0_20px_35px_rgba(0,0,0,0.2)]

        active:translate-y-1
        active:scale-95
        active:rotate-0
        active:shadow-[0_3px_0_rgba(0,0,0,0.18),0_6px_12px_rgba(0,0,0,0.15)]
      "
    >
      <span className="transition-transform duration-300 hover:-translate-y-1">
        ↑
      </span>
    </button>
  )
}
