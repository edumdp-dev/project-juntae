import type { Pool } from '@/types'
import { StatusBadge } from './status-badge'
import { PoolCard } from './pool-card'
import Link from 'next/link'

interface DataTableProps {
  pools: Pool[]
}

export function DataTable({ pools }: DataTableProps) {
  if (pools.length === 0) return null

  return (
    <>
      <div className="block sm:hidden space-y-3">
        {pools.map((pool) => (
          <PoolCard key={pool.id} pool={pool} />
        ))}
      </div>
      <div className="hidden sm:block tonal-layer-1 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant">
                  GRUPO
                </th>
                <th className="py-4 px-4 font-label-caps text-label-caps text-on-surface-variant">
                  STATUS
                </th>
                <th className="py-4 px-4 font-label-caps text-label-caps text-on-surface-variant">
                  INTEGRANTES
                </th>
                <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant text-right">
                  VALOR TOTAL
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {pools.map((pool) => (
                <tr
                  key={pool.id}
                  className="hover:bg-surface-container-high transition-colors cursor-pointer active:scale-[0.99]"
                >
                  <td className="py-4 px-6">
                    <Link href={`/pool/${pool.id}`} className="flex flex-col">
                      <span className="font-body-md text-on-surface">{pool.name}</span>
                      <span className="font-label-caps text-[10px] text-on-surface-variant">
                        #{pool.code}
                      </span>
                    </Link>
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge status={pool.status} />
                  </td>
                  <td className="py-4 px-4 font-data-md text-data-md">
                    {pool.participants.current}/{pool.participants.max}
                  </td>
                  <td className="py-4 px-6 font-data-md text-data-md text-right">
                    R$ {pool.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
