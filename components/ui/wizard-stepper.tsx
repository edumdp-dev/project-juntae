import { cn } from '@/lib/utils'

interface WizardStepperProps {
  steps: { label: string }[]
  current: number
}

export function WizardStepper({ steps, current }: WizardStepperProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center">
        {steps.map((step, idx) => {
          const isActive = idx <= current
          return (
            <div key={step.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={cn(
                    'w-8 h-8 flex items-center justify-center font-bold text-sm rounded-full transition-colors',
                    isActive
                      ? 'bg-primary-container text-on-primary-container'
                      : 'border-2 border-outline-variant text-on-surface-variant',
                  )}
                >
                  {idx + 1}
                </div>
                <span
                  className={cn(
                    'font-label-caps text-label-caps whitespace-nowrap',
                    idx === current ? 'text-primary' : 'text-on-surface-variant',
                  )}
                >
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-[2px] mt-0 mx-2',
                    idx < current ? 'bg-primary' : 'bg-outline-variant',
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
