import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { EscrowProgress } from '@/components/ui/escrow-progress'
import { StatusBadge } from '@/components/ui/status-badge'
import { getPoolById } from '@/lib/mock-data'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ id: string }>
}

export default async function SalaDoGrupoPage({ params }: Props) {
  const { id } = await params
  const pool = await getPoolById(id)

  if (!pool) notFound()

  return (
    <>
      <TopAppBar />
      <main className="pt-24 px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter pb-24">
        <EscrowProgress
          currentAmount={pool.currentAmount}
          targetAmount={pool.targetAmount}
          percentage={pool.percentage}
          escrowNode={pool.escrowNode}
        />

        <section className="md:col-span-12 lg:col-span-4 bg-surface-container p-margin flex flex-col justify-between rounded-2xl">
          <div>
            <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-margin">
              CONVITE DO GRUPO
            </h2>
            <div className="flex items-center gap-unit bg-surface-container-low border border-outline-variant p-2 rounded-xl">
              <span className="font-data-md text-data-md text-primary px-2">
                {pool.inviteCode}
              </span>
              <button className="ml-auto flex items-center justify-center p-2 rounded-lg hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-primary">content_copy</span>
              </button>
            </div>
          </div>
          <button className="w-full mt-4 border border-primary text-primary font-label-caps text-label-caps py-3 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">
            COPIAR LINK DE ACESSO
          </button>
        </section>

        <section className="md:col-span-12 bg-surface-container-low border border-outline-variant p-margin rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-margin">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-h2 text-h2 mb-unit">Sua Cota Mensal</h2>
              <p className="font-body-sm text-on-surface-variant">
                Vencimento: {pool.deadline}. Realize o aporte para manter sua conformidade no nó.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 flex items-center justify-center gap-2 rounded-2xl hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined">qr_code_2</span>
                EFETUAR PAGAMENTO (R$ {pool.monthlyContribution})
              </button>
            </div>
          </div>

          <div className="mt-margin pt-margin border-t border-outline-variant flex flex-col md:flex-row gap-margin items-center justify-center">
            <div className="p-4 bg-white rounded-2xl">
              <img
                className="w-40 h-40"
                alt="QR Code PIX"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdj16tMU_XAJ8DZM7X4Z1qg2-wRjw3NYRzGIvgvCUSzKEInGxhMlQ9-PzGoERN3VeQfna7LfXltUlIKAA-97pZG6Jlfjf0RkGKHstWa9Eb-qz__ikcN0rw2kuK-jS5iBB6SAh2VWQl4paf46FLPbEgCZUESuFF0YVTe2x84k_wbX0O7vCHKe3gvjVv5kyOz_j79gJlJ175kGMinO3LjTYuQwUWem6_5hjl54Jxma65_agFaGqGRNd4-59e-MpYLAKv9CiYYhgtfYBO"
              />
            </div>
            <div className="flex flex-col gap-unit max-w-sm">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                PIX COPIA E COLA
              </span>
              <div className="bg-surface-container-lowest p-3 border border-outline-variant font-data-md text-data-md break-all rounded-xl">
                00020126580014br.gov.bcb.pix0136f82...
              </div>
              <button className="text-primary font-label-caps text-label-caps text-left flex items-center gap-1 mt-2 hover:underline">
                <span className="material-symbols-outlined text-sm">content_copy</span>
                COPIAR CÓDIGO
              </button>
            </div>
          </div>
        </section>

        <section className="md:col-span-12 bg-surface-container overflow-hidden relative rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: '#0c56d0' }} />
          <div className="p-margin flex justify-between items-center">
            <h2 className="font-label-caps text-label-caps text-on-surface-variant">
              LEDGER DE PARTICIPAÇÃO
            </h2>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
                <div className="w-2 h-2 rounded-full bg-primary" /> LIQUIDADO
              </span>
              <span className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
                <div className="w-2 h-2 rounded-full bg-tertiary" /> AGUARDANDO
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="px-margin py-3 font-label-caps text-label-caps text-on-surface-variant">MEMBRO</th>
                  <th className="px-margin py-3 font-label-caps text-label-caps text-on-surface-variant">IDENTIFICADOR</th>
                  <th className="px-margin py-3 font-label-caps text-label-caps text-on-surface-variant text-right">CONTRIBUIÇÃO</th>
                  <th className="px-margin py-3 font-label-caps text-label-caps text-on-surface-variant text-center">STATUS</th>
                </tr>
              </thead>
              <tbody className="font-data-md text-data-md">
                {pool.members.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-outline-variant/30 hover:bg-surface-container-high transition-colors"
                  >
                    <td className="px-margin py-4 flex items-center gap-3">
                      <img
                        className="w-8 h-8 rounded-full border border-outline-variant"
                        src={member.avatar}
                        alt={member.name}
                      />
                      <span className="text-on-surface">{member.name}</span>
                    </td>
                    <td className="px-margin py-4 text-on-surface-variant">{member.wallet}</td>
                    <td className="px-margin py-4 text-right text-on-surface">
                      R$ {member.contribution.toFixed(2)}
                    </td>
                    <td className="px-margin py-4">
                      <div className="mx-auto w-fit">
                        <StatusBadge status={member.status} size="sm" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="md:col-span-12 flex justify-center py-margin">
          <div className="bg-surface-container-highest border border-error p-margin max-w-2xl w-full flex flex-col items-center gap-margin text-center rounded-2xl">
            <div className="flex items-center gap-2 text-error">
              <span className="material-symbols-outlined">gavel</span>
              <span className="font-label-caps text-label-caps">
                Protocolo de Liquidação Final
              </span>
            </div>
            <p className="font-body-sm text-on-surface-variant">
              Esta ação encerrará o Escrow Node e dispersará os fundos para os membros liquidados.
              Requer assinatura de 2/3 do conselho.
            </p>
            <button className="bg-error text-on-error font-label-caps text-label-caps px-12 py-4 flex items-center gap-3 rounded-2xl hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">lock_open</span>
              LIQUIDAR GRUPO
            </button>
          </div>
        </section>
      </main>
      <Navbar activeItem="pools" />
    </>
  )
}
