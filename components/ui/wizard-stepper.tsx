import { cn } from '@/lib/utils'

interface WizardStepperProps {
  steps: { label: string }[]
  current: number
}

export function WizardStepper({ steps, current }: WizardStepperProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, idx) => {
        const isActive = idx <= current
        const isCurrent = idx === current
        return (
          <div key={step.label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  'w-8 h-8 flex items-center justify-center font-bold text-sm rounded-full',
                  isActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'border-2 border-outline-variant text-on-surface-variant',
                )}
              >
                {idx + 1}
              </div>
              <span
                className={cn(
                  'font-label-caps text-label-caps',
                  isCurrent ? 'text-primary' : 'text-on-surface-variant',
                )}
              >
                {step.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  'flex-grow h-[2px] mx-3 mb-6',
                  idx < current ? 'bg-primary' : 'bg-outline-variant',
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
