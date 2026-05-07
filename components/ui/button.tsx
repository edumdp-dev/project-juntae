import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'outline' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary-container text-on-primary-container hover:bg-primary transition-colors',
  outline:
    'border border-primary text-primary hover:bg-surface-container-high transition-colors',
  danger:
    'bg-error text-on-error hover:opacity-90 transition-opacity',
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-semibold px-6 py-3 flex items-center gap-2 rounded-xl',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
