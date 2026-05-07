'use client'

import { useCallback, useRef, useState } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: Options = {}) {
  const [revealed, setRevealed] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const ref = useCallback<(el: T | null) => void>(
    (el) => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            if (once) observer.unobserve(el)
          } else if (!once) {
            setRevealed(false)
          }
        },
        { threshold, rootMargin },
      )

      observer.observe(el)
      observerRef.current = observer
    },
    [threshold, rootMargin, once],
  )

  return { ref, revealed }
}
