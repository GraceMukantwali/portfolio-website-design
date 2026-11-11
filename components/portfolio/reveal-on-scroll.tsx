'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function RevealOnScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const sections = container.querySelectorAll<HTMLElement>('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    sections.forEach((section) => {
      section.classList.add('portfolio-reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return <div ref={containerRef}>{children}</div>
}
