'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  visible: boolean
  variant?: 'success' | 'error'
  onClose?: () => void
  duration?: number
}

export function Toast({
  message,
  visible,
  variant = 'success',
  onClose,
  duration = 3000,
}: ToastProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (visible) {
      setShow(true)
      const timer = setTimeout(() => {
        setShow(false)
        onClose?.()
      }, duration)
      return () => clearTimeout(timer)
    }
    setShow(false)
  }, [visible, duration, onClose])

  return (
    <div
      className={cn(
        'fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3 px-6 py-4 rounded-2xl shadow-lg border',
          variant === 'success'
            ? 'bg-primary-container text-on-primary-container border-primary/20'
            : 'bg-error-container text-on-error-container border-error/20',
        )}
      >
        <span className="material-symbols-outlined">
          {variant === 'success' ? 'check_circle' : 'error_outline'}
        </span>
        <span className="font-body-md">{message}</span>
      </div>
    </div>
  )
}
