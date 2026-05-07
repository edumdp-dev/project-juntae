import { cn } from '@/lib/utils'

interface KpiCardProps {
  title: string
  value: string
  accent: 'primary' | 'tertiary'
  children?: React.ReactNode
}

export function KpiCard({ title, value, accent, children }: KpiCardProps) {
  return (
    <div className="tonal-layer-1 p-6 relative overflow-hidden rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
      <div
        className={cn(
          'absolute top-0 left-0 w-full h-[4px]',
          accent === 'primary' ? 'bg-primary' : 'bg-tertiary',
        )}
      />
      <div className="flex flex-col gap-2">
        <span className="font-label-caps text-label-caps text-on-surface-variant">
          {title}
        </span>
        <div className="flex items-end gap-2">
          <span className="font-data-lg text-data-lg text-primary">R$</span>
          <span className="text-2xl md:text-3xl font-data-lg leading-none tracking-tight">
            {value}
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}
