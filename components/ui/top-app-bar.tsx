'use client'

import Link from 'next/link'
import { useSidebar } from '@/lib/sidebar-context'
import type { AppBarVariant } from '@/types'

interface TopAppBarProps {
  variant?: AppBarVariant
}

export function TopAppBar({ variant = 'full' }: TopAppBarProps) {
  const { toggle } = useSidebar()

  if (variant === 'centered') {
    return (
      <header className="bg-surface border-b border-outline-variant fixed top-0 z-50 w-full">
        <div className="flex justify-center items-center w-full px-margin h-16 max-w-container-max mx-auto">
          <Link href="/dashboard">
            <img src="/shield.png" alt="JUNTAE" className="h-8" />
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-surface border-b border-outline-variant fixed top-0 z-50 w-full">
      <div className="grid grid-cols-3 items-center w-full px-margin h-16 max-w-container-max mx-auto">
        <button
          onClick={toggle}
          className="justify-self-start text-primary hover:bg-surface-container-high transition-colors p-2 rounded-xl"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <Link href="/dashboard" className="justify-self-center">
          <img src="/shield.png" alt="JUNTAE" className="h-8" />
        </Link>
        <Link
          href="/perfil"
          className="justify-self-end w-10 h-10 rounded-full overflow-hidden border border-outline-variant bg-surface-container-highest"
        >
          <img
            alt="User Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8cMr954gqN2a-Mks3tEed6tL2RhRvU746guunVjQAZwSeec_-j0fq6fp8jgwCecAAAubrSMbgd9XAcyhpbfzCI4bYF8u9I1YVEs6-bO4JZ5t-6jkNDorSIbkvXUX5jqXiJdM5QqKn5CdZ1i2aF3zsJZHilnKxn03Tsk3hoCP65e2ziyZkAn-2i3F-B9gi3ezxBgij_YFbTz9C0efhDTcH0N7ODvtiQu8_slMmA8PQ-MAkKAcLHsO9o_wSb9DY6xCTTjHcVeYezTA"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </header>
  )
}
