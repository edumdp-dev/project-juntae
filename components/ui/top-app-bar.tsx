'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { AppBarVariant } from '@/types'

interface TopAppBarProps {
  variant?: AppBarVariant
}

export function TopAppBar({ variant = 'full' }: TopAppBarProps) {
  if (variant === 'centered') {
    return (
      <header className="bg-surface border-b border-outline-variant fixed top-0 z-50 w-full">
        <div className="flex justify-center items-center w-full px-margin h-16 max-w-container-max mx-auto">
          <img src="/logo.png" alt="JUNTAE" className="h-8" />
        </div>
      </header>
    )
  }

  return (
    <header className="bg-surface border-b border-outline-variant fixed top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-margin h-16 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-xl">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <img src="/logo.png" alt="JUNTAE" className="h-8" />
        </div>
        <Link href="/perfil" className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant bg-surface-container-highest">
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
