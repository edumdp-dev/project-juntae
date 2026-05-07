import { cn } from '@/lib/utils'
import type { PoolStatus, PaymentStatus } from '@/types'

type BadgeStatus = PoolStatus | PaymentStatus

const config: Record<BadgeStatus, { label: string; styles: string }> = {
  ativo: {
    label: 'ATIVO',
    styles: 'bg-primary/10 text-primary border border-primary/20',
  },
  aguardando: {
    label: 'AGUARDANDO',
    styles: 'bg-tertiary/10 text-tertiary border border-tertiary/20',
  },
  liquidado: {
    label: 'Liquidado',
    styles: 'bg-primary/10 text-primary border border-primary/20',
  },
}

interface StatusBadgeProps {
  status: BadgeStatus
  size?: 'sm' | 'md'
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const c = config[status]
  return (
    <span
      className={cn(
        'font-bold uppercase rounded-full inline-block',
        size === 'sm'
          ? 'px-2 py-1 text-[10px]'
          : 'px-3 py-1 text-[11px]',
        c.styles,
      )}
    >
      {c.label}
    </span>
  )
}
