'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { NavItem } from '@/types'

interface NavbarProps {
  activeItem: NavItem
}

const items: { icon: string; label: string; href: string; id: NavItem }[] = [
  { icon: 'dashboard', label: 'Summary', href: '/dashboard', id: 'summary' },
  { icon: 'account_balance_wallet', label: 'Pools', href: '/pools', id: 'pools' },
  { icon: 'add_box', label: 'Create', href: '/criar-grupo', id: 'create' },
  { icon: 'receipt_long', label: 'Ledger', href: '/ledger', id: 'ledger' },
]

export function Navbar({ activeItem }: NavbarProps) {
  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-gutter h-16 bg-surface-container-low border-t border-outline-variant">
      {items.map((item) => {
        const isActive = item.id === activeItem
        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center pt-1 w-full h-full transition-colors duration-100',
              isActive
                ? 'text-primary border-t-2 border-primary'
                : 'text-on-surface-variant hover:text-primary',
            )}
          >
            <span
              className="material-symbols-outlined"
              {...(isActive ? { style: { fontVariationSettings: "'FILL' 1" } as React.CSSProperties } : {})}
            >
              {item.icon}
            </span>
            <span className="font-label-caps text-label-caps">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
