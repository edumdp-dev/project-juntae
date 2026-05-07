interface EscrowProgressProps {
  currentAmount: number
  targetAmount: number
  percentage: number
  escrowNode: string
}

export function EscrowProgress({
  currentAmount,
  targetAmount,
  percentage,
  escrowNode,
}: EscrowProgressProps) {
  return (
    <section className="md:col-span-12 lg:col-span-8 bg-surface-container border-l-4 border-primary p-margin relative overflow-hidden rounded-2xl reveal">
      <div className="flex flex-col gap-unit">
        <span className="font-label-caps text-label-caps text-primary uppercase">
          Valor em Custódia
        </span>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-data-lg text-h1 md:text-h1 text-on-surface">
            R$ {currentAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
          <span className="font-body-sm text-on-surface-variant whitespace-nowrap">
            de R$ {targetAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} meta
          </span>
        </div>
        <div className="w-full h-2 bg-surface-container-highest mt-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            {percentage}% ARRECADADO
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            {escrowNode}
          </span>
        </div>
      </div>
    </section>
  )
}
