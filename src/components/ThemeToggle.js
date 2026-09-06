'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    } else if (savedTheme === 'light') {
      setDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      const systemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      setDark(systemDark)

      if (systemDark) {
        document.documentElement.classList.add('dark')
      }
    }

    setMounted(true)
  }, [])

  function toggleTheme() {
    const newTheme = !dark

    setDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-border" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-lg transition-all hover:scale-105 hover:opacity-80"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
