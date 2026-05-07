import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { KpiCard } from '@/components/ui/kpi-card'
import { DataTable } from '@/components/ui/data-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getPools } from '@/lib/mock-data'

export default async function DashboardPage() {
  const pools = await getPools()

  return (
    <>
      <TopAppBar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin pt-24 pb-24">
        <section className="mb-10">
          <h2 className="font-h2 text-h2 text-on-surface">Olá, João Silva</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Sua visão geral institucional hoje.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-10">
          <KpiCard
            title="VALOR EM CUSTÓDIA"
            value="1.248.500,00"
            accent="primary"
          />
          <KpiCard
            title="ALERTAS DE AÇÃO"
            value="—"
            accent="tertiary"
          >
            <div className="flex items-center gap-3 bg-tertiary/10 border border-tertiary/20 p-3 rounded-xl mt-2">
              <span className="material-symbols-outlined text-tertiary">warning</span>
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
              <span className="material-symbols-outlined">add_box</span>
              Novo Grupo
            </Button>
          </Link>
          <Button variant="outline">
            <span className="material-symbols-outlined">vpn_key</span>
            Entrar com Código
          </Button>
        </section>

        <section className="flex flex-col">
          <div className="flex gap-8 mb-4 border-b border-outline-variant px-2">
            <button className="font-label-caps text-label-caps pb-4 text-primary border-b-2 border-primary">
              GRUPOS ATIVOS
            </button>
            <button className="font-label-caps text-label-caps pb-4 text-on-surface-variant hover:text-on-surface transition-colors">
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
