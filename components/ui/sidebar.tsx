'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/lib/sidebar-context'

const items = [
  { icon: 'space_dashboard', label: 'Resumo', href: '/dashboard', id: 'summary' },
  { icon: 'savings', label: 'Meus Grupos', href: '/grupos', id: 'pools' },
  { icon: 'playlist_add', label: 'Criar Grupo', href: '/criar-grupo', id: 'create' },
  { icon: 'receipt', label: 'Extrato', href: '/extrato', id: 'ledger' },
  { icon: 'person', label: 'Perfil', href: '/perfil', id: 'perfil' },
]

export function Sidebar() {
  const pathname = usePathname()
  const { open, setOpen } = useSidebar()

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={cn(
          'fixed top-0 left-0 z-[70] h-full w-72 bg-surface-container border-r border-outline-variant flex flex-col transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-margin h-16 border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <img src="/shield.png" alt="JUNTAE" className="w-8 h-8" />
            <span className="font-h2 text-h2 text-on-surface">JUNTAE</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 py-4 px-2 space-y-1">
          {items.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
                  isActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
                )}
              >
                <span
                  className="material-symbols-outlined"
                  {...(isActive ? { style: { fontVariationSettings: "'FILL' 1" } as React.CSSProperties } : {})}
                >
                  {item.icon}
                </span>
                <span className="font-body-md">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-outline-variant p-margin space-y-3">
          <Link
            href="/perfil"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md">Configurações</span>
          </Link>
          <Link
            href="/auth"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-on-surface-variant hover:text-error transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-md">Sair da Conta</span>
          </Link>
          <p className="font-label-caps text-label-caps text-outline pt-2">JUNTAE v0.1.0</p>
        </div>
      </aside>
    </>
  )
}
