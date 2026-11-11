'use client'

import { Fragment, useEffect, useRef, useState, type CSSProperties } from 'react'

type WordRevealTextProps = {
  text: string
  className?: string
  delayMs?: number
  staggerMs?: number
}

export function WordRevealText({
  text,
  className,
  delayMs = 0,
  staggerMs = 220,
}: WordRevealTextProps) {
  const [isActive, setIsActive] = useState(false)
  const textRef = useRef<HTMLSpanElement>(null)
  const words = text.trim() ? text.trim().split(/\s+/u) : []

  useEffect(() => {
    const target = textRef.current
    if (!target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsActive(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={textRef}
      className={`word-reveal-text${isActive ? ' is-active' : ''}${className ? ` ${className}` : ''}`}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <Fragment key={`${index}-${word}`}>
            {index > 0 && ' '}
            <span
              className="word-reveal-word"
              style={{ animationDelay: `${delayMs + index * staggerMs}ms` } as CSSProperties}
            >
              {word}
            </span>
          </Fragment>
        ))}
      </span>
    </span>
  )
}
