'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/posts', label: 'Posts' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-70 sm:text-2xl"
        >
          Sudeep
          <span className="text-muted-foreground">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-foreground ${
                isActive(link.href) ? 'font-semibold text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://sudeepsilwal.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
          >
            Portfolio ↗
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:bg-muted"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-16 border-b border-border bg-background/95 p-4 backdrop-blur-md sm:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-2 text-sm transition-colors hover:bg-muted ${
                    isActive(link.href) ? 'font-semibold text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://sudeepsilwal.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Portfolio ↗
              </a>
            </div>
          </div>
        )}

      </nav>
    </header>
  )
}