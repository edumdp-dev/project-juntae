import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-gutter bg-background">
      <div className="flex flex-col items-center gap-6 max-w-sm text-center">
        <div className="relative">
          <span className="material-symbols-outlined text-7xl text-outline opacity-30">shield</span>
          <span className="material-symbols-outlined text-4xl text-error absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">error_outline</span>
        </div>
        <h1 className="font-h1 text-h1 text-on-surface">Página não encontrada</h1>
        <p className="font-body-sm text-on-surface-variant">
          O grupo ou página que você procura não existe ou foi removido.
        </p>
        <Link
          href="/dashboard"
          className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar ao Resumo
        </Link>
      </div>
    </main>
  )
}
