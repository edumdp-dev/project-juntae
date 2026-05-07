import type { Pool } from '@/types'
import { StatusBadge } from './status-badge'
import Link from 'next/link'

interface PoolCardProps {
  pool: Pool
}

export function PoolCard({ pool }: PoolCardProps) {
  return (
    <Link
      href={`/pool/${pool.id}`}
      className="block bg-surface-container p-margin rounded-2xl border border-outline-variant hover:bg-surface-container-high hover:scale-[1.01] transition-all duration-200"
    >
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-body-md text-on-surface truncate">{pool.name}</h3>
          <p className="font-label-caps text-[10px] text-on-surface-variant mt-0.5">
            #{pool.code}
          </p>
        </div>
        <StatusBadge status={pool.status} size="sm" />
      </div>
      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-outline-variant/30">
        <span className="material-symbols-outlined text-outline text-sm">people</span>
        <span className="font-label-caps text-label-caps text-on-surface-variant">
          {pool.participants.current}/{pool.participants.max}
        </span>
        <span className="ml-auto font-data-md text-data-md text-on-surface">
          R$ {pool.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
      </div>
    </Link>
  )
}
