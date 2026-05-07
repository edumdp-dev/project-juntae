'use client'

import { useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ConfirmModalProps {
  open: boolean
  title: string
  description: string
  confirmLabel: string
  cancelLabel?: string
  variant?: 'danger' | 'primary'
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmModal({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel = 'Cancelar',
  variant = 'danger',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel()
    }
    if (open) {
      document.addEventListener('keydown', handler)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, onCancel])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-gutter"
      onClick={onCancel}
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-surface-container border border-outline-variant p-margin rounded-2xl max-w-sm w-full animate-scale-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center gap-4 mb-6">
          <div
            className={cn(
              'w-14 h-14 rounded-full flex items-center justify-center',
              variant === 'danger' ? 'bg-error/10' : 'bg-primary/10',
            )}
          >
            <span
              className={cn(
                'material-symbols-outlined text-3xl',
                variant === 'danger' ? 'text-error' : 'text-primary',
              )}
            >
              {variant === 'danger' ? 'gavel' : 'info'}
            </span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface">{title}</h3>
          <p className="font-body-sm text-on-surface-variant">{description}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 border border-outline-variant text-on-surface font-label-caps text-label-caps py-3 rounded-xl hover:bg-surface-container-highest transition-colors"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className={cn(
              'flex-1 font-label-caps text-label-caps py-3 rounded-xl transition-colors',
              variant === 'danger'
                ? 'bg-error text-on-error hover:opacity-90'
                : 'bg-primary-container text-on-primary-container hover:bg-primary',
            )}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
