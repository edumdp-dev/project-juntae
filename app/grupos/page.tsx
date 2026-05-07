'use client'

import { useState } from 'react'
import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { StatusBadge } from '@/components/ui/status-badge'
import { EmptyState } from '@/components/ui/empty-state'
import Link from 'next/link'
import { mockPools } from '@/lib/mock-data'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

type Filtro = 'todos' | 'ativos' | 'encerrados'

export default function GruposPage() {
  const [filtro, setFiltro] = useState<Filtro>('todos')
  const [busca, setBusca] = useState('')
  const { ref, revealed } = useScrollReveal()

  const filtered = mockPools.filter((p) => {
    if (filtro === 'ativos' && p.status === 'encerrado') return false
    if (filtro === 'encerrados' && p.status !== 'encerrado') return false
    if (busca && !p.name.toLowerCase().includes(busca.toLowerCase())) return false
    return true
  })

  return (
    <>
      <TopAppBar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin pt-24 pb-28">
        <section
          ref={ref}
          className={`transition-all duration-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 className="font-h2 text-h2 text-on-surface mb-6">Meus Grupos</h2>

          <div className="relative mb-4">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar grupos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 pl-12 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md"
            />
          </div>

          <div className="flex gap-3 mb-6">
            {(['todos', 'ativos', 'encerrados'] as Filtro[]).map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`px-4 py-2 rounded-full font-label-caps text-label-caps transition-all ${
                  filtro === f
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {f === 'todos' ? 'Todos' : f === 'ativos' ? 'Ativos' : 'Encerrados'}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              icon="savings"
              title="Nenhum grupo encontrado"
              description="Crie um novo grupo ou ajuste os filtros de busca."
              actionLabel="Criar Grupo"
              actionHref="/criar-grupo"
            />
          ) : (
            <div className="grid gap-4">
              {filtered.map((pool, idx) => (
                <Link
                  key={pool.id}
                  href={`/pool/${pool.id}`}
                  className={`bg-surface-container p-margin rounded-2xl border border-outline-variant hover:bg-surface-container-high hover:scale-[1.01] transition-all duration-200 animate-fade-in-up stagger-${Math.min(idx + 1, 5)}`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-body-md text-on-surface truncate">{pool.name}</h3>
                      <p className="font-label-caps text-[10px] text-on-surface-variant mt-1">
                        #{pool.code}
                      </p>
                      {pool.category && (
                        <span className="inline-block mt-2 text-[10px] font-label-caps text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          {pool.category}
                        </span>
                      )}
                    </div>
                    <StatusBadge status={pool.status} size="sm" />
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-outline-variant/30">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      {pool.participants.current}/{pool.participants.max} integrantes
                    </span>
                    <span className="font-data-md text-data-md text-on-surface">
                      R$ {pool.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Navbar activeItem="pools" />
    </>
  )
}
