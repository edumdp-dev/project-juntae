import Link from 'next/link'

interface EmptyStateProps {
  icon: string
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-gutter text-center">
      <span className="material-symbols-outlined text-6xl text-outline mb-4">
        {icon}
      </span>
      <h3 className="font-h2 text-h2 text-on-surface mb-2">{title}</h3>
      <p className="font-body-sm text-on-surface-variant max-w-sm mb-6">{description}</p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
