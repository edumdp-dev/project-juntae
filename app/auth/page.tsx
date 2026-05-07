'use client'

import { useState } from 'react'
import Link from 'next/link'

type AuthStep = 'login' | 'otp'

export default function AuthPage() {
  const [step, setStep] = useState<AuthStep>('login')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.length >= 10) setStep('otp')
  }

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const next = [...otp]
    next[index] = value.slice(-1)
    setOtp(next)
    if (value && index < 5) {
      const nextInput = document.querySelector<HTMLInputElement>(
        `input[data-otp-index="${index + 1}"]`,
      )
      nextInput?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.querySelector<HTMLInputElement>(
        `input[data-otp-index="${index - 1}"]`,
      )
      prevInput?.focus()
    }
  }

  const isOtpComplete = otp.every((d) => d !== '')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-gutter bg-background">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">
        {/* Logo Shield */}
        <div className="flex flex-col items-center gap-4">
          <img src="/shield.png" alt="JUNTAE" className="w-20 h-20" />
          <div className="text-center">
            <h1 className="font-h1 text-h1 text-on-surface">JUNTAE</h1>
            <p className="font-body-sm text-on-surface-variant mt-2">
              Custódia institucional para grupos financeiros
            </p>
          </div>
        </div>

        {step === 'login' && (
          <form onSubmit={handleSendOtp} className="w-full space-y-6">
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                Telefone com DDD
              </label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md text-center tracking-wider"
                maxLength={15}
              />
            </div>

            <button
              type="submit"
              disabled={phone.length < 10}
              className="w-full bg-primary-container text-on-primary-container font-h2 text-h2 py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">send</span>
              ENVIAR CÓDIGO
            </button>

            <div className="relative flex items-center justify-center py-2">
              <div className="flex-grow h-px bg-outline-variant" />
              <span className="px-4 font-label-caps text-label-caps text-on-surface-variant">
                ou
              </span>
              <div className="flex-grow h-px bg-outline-variant" />
            </div>

            <button
              type="button"
              className="w-full border border-outline-variant text-on-surface-variant font-label-caps text-label-caps py-4 rounded-2xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">fingerprint</span>
              ENTRAR COM BIOMETRIA
            </button>
          </form>
        )}

        {step === 'otp' && (
          <div className="w-full space-y-6">
            <div className="text-center space-y-2">
              <p className="font-body-sm text-on-surface-variant">
                Código enviado para
              </p>
              <p className="font-data-md text-data-md text-primary">{phone}</p>
            </div>

            <div className="flex justify-center gap-3">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  data-otp-index={idx}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="w-12 h-14 bg-surface-container-low border border-outline-variant rounded-xl text-center font-data-lg text-data-lg text-on-surface focus:border-primary focus:ring-0 transition-colors"
                />
              ))}
            </div>

            <button
              type="button"
              disabled={!isOtpComplete}
              className="w-full bg-primary-container text-on-primary-container font-h2 text-h2 py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">verified_user</span>
              VERIFICAR
            </button>

            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => setStep('login')}
                className="text-primary font-label-caps text-label-caps hover:underline"
              >
                ALTERAR NÚMERO
              </button>
              <p className="font-body-sm text-on-surface-variant text-center">
                Não recebeu?{' '}
                <button
                  type="button"
                  className="text-primary hover:underline font-semibold"
                >
                  Reenviar código
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Compliance */}
        <p className="text-center font-body-sm text-body-sm text-outline max-w-xs">
          Ao continuar, você concorda com os{' '}
          <span className="text-primary hover:underline cursor-pointer">
            Termos de Uso
          </span>{' '}
          e{' '}
          <span className="text-primary hover:underline cursor-pointer">
            Política de Privacidade
          </span>
          .
        </p>

        <Link
          href="/dashboard"
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors"
        >
          PULAR POR ENQUANTO →
        </Link>
      </div>
    </main>
  )
}
