'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Toast } from '@/components/ui/toast'

export default function EntrarCodigoPage() {
  const [codigo, setCodigo] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setToastVisible(true)
  }
  const [toastMessage, setToastMessage] = useState('')

  const formatCodigo = (v: string) => {
    const u = v.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 9)
    if (u.length <= 4) return u
    return `${u.slice(0, 4)}-${u.slice(4)}`
  }

  const canSubmit = codigo.length === 9

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    showToast('Entrando no grupo...')
    setTimeout(() => {
      window.location.href = '/pool/8829-X'
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-gutter bg-background">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <img src="/shield.png" alt="JUNTAE" className="w-20 h-20" />
          <div className="text-center">
            <h1 className="font-h1 text-h1 text-on-surface">JUNTAE</h1>
            <p className="font-body-sm text-on-surface-variant mt-2">
              Entre em um grupo com o código de convite
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Código de Convite
            </label>
            <input
              type="text"
              placeholder="XXXX-XXXX"
              value={codigo}
              onChange={(e) => setCodigo(formatCodigo(e.target.value))}
              className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-data-lg text-data-lg text-center tracking-widest h-14"
              autoFocus
              maxLength={9}
            />
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
              Digite o código que você recebeu do organizador
            </p>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full bg-primary-container text-on-primary-container font-label-caps text-label-caps py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 h-14"
          >
            <span className="material-symbols-outlined">login</span>
            ENTRAR NO GRUPO
          </button>
        </form>

        <Link
          href="/dashboard"
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors"
        >
          ← VOLTAR
        </Link>
      </div>

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </main>
  )
}
