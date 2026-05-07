'use client'

import { useState } from 'react'
import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { EmptyState } from '@/components/ui/empty-state'
import { mockTransactions } from '@/lib/mock-data'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

type Periodo = '7d' | '30d' | 'todos'
type TipoFiltro = 'todos' | 'entrada' | 'saida'

export default function ExtratoPage() {
  const [periodo, setPeriodo] = useState<Periodo>('todos')
  const [tipo, setTipo] = useState<TipoFiltro>('todos')
  const { ref, revealed } = useScrollReveal()

  const filtered = mockTransactions.filter((t) => {
    if (tipo === 'entrada' && t.type !== 'entrada') return false
    if (tipo === 'saida' && t.type !== 'saida') return false
    return true
  })

  const saldoEntradas = filtered.filter(t => t.type === 'entrada' && t.status === 'confirmado').reduce((a, t) => a + t.amount, 0)
  const saldoSaidas = filtered.filter(t => t.type === 'saida' && t.status === 'confirmado').reduce((a, t) => a + t.amount, 0)
  const saldoTotal = saldoEntradas - saldoSaidas

  return (
    <>
      <TopAppBar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin pt-24 pb-28">
        <section
          ref={ref}
          className={`transition-all duration-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 className="font-h2 text-h2 text-on-surface mb-6">Extrato</h2>

          <div className="grid grid-cols-3 gap-gutter mb-6">
            <div className="tonal-layer-1 p-4 rounded-2xl text-center">
              <span className="font-data-lg text-data-lg text-primary">
                R$ {saldoEntradas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 text-green-400">Entradas</p>
            </div>
            <div className="tonal-layer-1 p-4 rounded-2xl text-center">
              <span className="font-data-lg text-data-lg text-tertiary">
                R$ {saldoSaidas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 text-red-400">Saídas</p>
            </div>
            <div className="tonal-layer-1 p-4 rounded-2xl text-center">
              <span className={`font-data-lg text-data-lg ${saldoTotal >= 0 ? 'text-primary' : 'text-tertiary'}`}>
                R$ {saldoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Saldo</p>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            {(['todos', 'entrada', 'saida'] as TipoFiltro[]).map((t) => (
              <button
                key={t}
                onClick={() => setTipo(t)}
                className={`px-4 py-2 rounded-full font-label-caps text-label-caps transition-all ${
                  tipo === t
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {t === 'todos' ? 'Todos' : t === 'entrada' ? 'Entradas' : 'Saídas'}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              icon="receipt"
              title="Nenhuma transação"
              description="Suas transações aparecerão aqui assim que você participar de grupos."
              actionLabel="Criar Grupo"
              actionHref="/criar-grupo"
            />
          ) : (
            <div className="space-y-3">
              {filtered.map((tx, idx) => (
                <div
                  key={tx.id}
                  className={`bg-surface-container p-margin rounded-2xl border border-outline-variant hover:bg-surface-container-high transition-all duration-200 animate-fade-in-up stagger-${Math.min(idx + 1, 5)}`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-sm ${
                          tx.type === 'entrada' ? 'text-primary' : 'text-tertiary'
                        }`}>
                          {tx.type === 'entrada' ? 'arrow_downward' : 'arrow_upward'}
                        </span>
                        <p className="font-body-md text-on-surface truncate">{tx.description}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-1 ml-7">
                        <span className="font-label-caps text-[10px] text-on-surface-variant">{tx.date}</span>
                        <span className={`text-[10px] font-label-caps px-2 py-0.5 rounded-full ${
                          tx.status === 'confirmado'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-tertiary/10 text-tertiary'
                        }`}>
                          {tx.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                        </span>
                      </div>
                    </div>
                    <span className={`font-data-md text-data-md whitespace-nowrap ${
                      tx.type === 'entrada' ? 'text-primary' : 'text-tertiary'
                    }`}>
                      {tx.type === 'entrada' ? '+' : '-'} R$ {tx.amount.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Navbar activeItem="ledger" />
    </>
  )
}
