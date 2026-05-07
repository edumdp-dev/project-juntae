'use client'

import { useState } from 'react'
import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { KpiCard } from '@/components/ui/kpi-card'
import { DataTable } from '@/components/ui/data-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { mockPools } from '@/lib/mock-data'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import type { Pool } from '@/types'

type Tab = 'ativos' | 'historico'

export default function DashboardPage() {
  const [tab, setTab] = useState<Tab>('ativos')
  const { ref: headerRef, revealed: headerRevealed } = useScrollReveal()
  const { ref: kpiRef, revealed: kpiRevealed } = useScrollReveal()
  const { ref: tableRef, revealed: tableRevealed } = useScrollReveal()

  const ativos = mockPools.filter((p) => p.status !== 'encerrado')
  const historico = mockPools.filter((p) => p.status === 'encerrado')

  const pools: Pool[] = tab === 'ativos' ? ativos : historico

  return (
    <>
      <TopAppBar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin pt-24 pb-28">
        <section
          ref={headerRef}
          className={`mb-10 transition-all duration-500 ${headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 className="font-h2 text-h2 text-on-surface">Olá, João</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Sua visão geral institucional hoje.
          </p>
        </section>

        <section
          ref={kpiRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-gutter mb-10 transition-all duration-500 delay-100 ${kpiRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <KpiCard
            title="VALOR EM CUSTÓDIA"
            value="1.248,50"
            accent="primary"
          />
          <KpiCard
            title="AÇÕES PENDENTES"
            value="—"
            accent="tertiary"
          >
            <div className="flex items-center gap-3 bg-tertiary/10 border border-tertiary/20 p-3 rounded-xl mt-2">
              <span className="material-symbols-outlined text-tertiary">error_outline</span>
              <div className="flex flex-col">
                <span className="font-label-caps text-label-caps text-tertiary">
                  PAGAMENTO PENDENTE
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Liquidando em 14h:32m
                </span>
              </div>
            </div>
          </KpiCard>
        </section>

        <section className="flex flex-wrap gap-4 mb-12">
          <Link href="/criar-grupo">
            <Button>
              <span className="material-symbols-outlined">playlist_add</span>
              Novo Grupo
            </Button>
          </Link>
          <Button variant="outline">
            <span className="material-symbols-outlined">vpn_key</span>
            Entrar com Código
          </Button>
        </section>

        <section
          ref={tableRef}
          className={`flex flex-col transition-all duration-500 delay-200 ${tableRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex gap-8 mb-4 border-b border-outline-variant px-2">
            <button
              onClick={() => setTab('ativos')}
              className={`font-label-caps text-label-caps pb-4 transition-all ${
                tab === 'ativos'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              GRUPOS ATIVOS
            </button>
            <button
              onClick={() => setTab('historico')}
              className={`font-label-caps text-label-caps pb-4 transition-all ${
                tab === 'historico'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              HISTÓRICO
            </button>
          </div>
          <DataTable pools={pools} />
        </section>
      </main>
      <Navbar activeItem="summary" />
    </>
  )
}
