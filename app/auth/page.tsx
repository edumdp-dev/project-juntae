'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { WizardStepper } from '@/components/ui/wizard-stepper'
import { Toast } from '@/components/ui/toast'

type AuthMode = 'login' | 'cadastro'
type AuthStep = 'dados' | 'otp' | 'pix'

const cadastroSteps = [
  { label: 'Dados' },
  { label: 'Verificação' },
  { label: 'PIX' },
]

const pixOptions = [
  { type: 'CPF', icon: 'badge' },
  { type: 'Telefone', icon: 'smartphone' },
  { type: 'E-mail', icon: 'email' },
  { type: 'Chave Aleatória', icon: 'key' },
]

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('login')
  const [step, setStep] = useState<AuthStep>('dados')

  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [tipoPix, setTipoPix] = useState('')
  const [chavePix, setChavePix] = useState('')

  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setToastVisible(true)
  }

  useEffect(() => {
    if (tipoPix === 'CPF') {
      setChavePix(cpf)
    } else if (tipoPix === 'Telefone') {
      setChavePix(phone)
    } else {
      setChavePix('')
    }
  }, [tipoPix, cpf, phone])

  const formatCpf = (v: string) => {
    const digits = v.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
  }

  const formatPhone = (v: string) => {
    const digits = v.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.length >= 14) setStep('otp')
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

  const handleVerify = () => {
    showToast('Conta criada com sucesso!')
    setTimeout(() => {
      window.location.href = '/dashboard'
    }, 1500)
  }

  const canAdvanceDados = nome.length >= 3 && cpf.replace(/\D/g, '').length === 11

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-gutter bg-background">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <img src="/shield.png" alt="JUNTAE" className="w-20 h-20" />
          <div className="text-center">
            <h1 className="font-h1 text-h1 text-on-surface">JUNTAE</h1>
            <p className="font-body-sm text-on-surface-variant mt-2">
              Custódia para grupos financeiros
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-unit bg-surface-container-low p-1 rounded-2xl border border-outline-variant w-full">
          <button
            className={`font-label-caps text-label-caps py-3 rounded-xl transition-all ${
              mode === 'login'
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant'
            }`}
            onClick={() => { setMode('login'); setStep('dados') }}
          >
            ENTRAR
          </button>
          <button
            className={`font-label-caps text-label-caps py-3 rounded-xl transition-all ${
              mode === 'cadastro'
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant'
            }`}
            onClick={() => { setMode('cadastro'); setStep('dados') }}
          >
            CRIAR CONTA
          </button>
        </div>

        {mode === 'login' && (
          <>
            {step === 'dados' && (
              <form onSubmit={handleSendOtp} className="w-full space-y-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                    Telefone com DDD
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md text-center tracking-wider h-14"
                  />
                </div>

                <button
                  type="submit"
                  disabled={phone.length < 14}
                  className="w-full bg-primary-container text-on-primary-container font-h2 text-h2 py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                  ENVIAR CÓDIGO
                </button>

                <div className="relative flex items-center justify-center py-2">
                  <div className="flex-grow h-px bg-outline-variant" />
                  <span className="px-4 font-label-caps text-label-caps text-on-surface-variant">ou</span>
                  <div className="flex-grow h-px bg-outline-variant" />
                </div>

                <button
                  type="button"
                  className="w-full border border-outline-variant text-on-surface-variant font-label-caps text-label-caps py-4 rounded-2xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-3 h-14"
                >
                  <span className="material-symbols-outlined">fingerprint</span>
                  ENTRAR COM BIOMETRIA
                </button>
              </form>
            )}

            {step === 'otp' && (
              <div className="w-full space-y-6 min-h-[280px]">
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
                      className="w-10 h-12 sm:w-12 sm:h-14 bg-surface-container-low border border-outline-variant rounded-xl text-center font-data-lg text-data-lg text-on-surface focus:border-primary focus:ring-0 transition-colors"
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={!isOtpComplete}
                  onClick={handleVerify}
                  className="w-full bg-primary-container text-on-primary-container font-h2 text-h2 py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined">shield</span>
                  VERIFICAR
                </button>

                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStep('dados')}
                    className="text-primary font-label-caps text-label-caps hover:underline"
                  >
                    ALTERAR NÚMERO
                  </button>
                  <p className="font-body-sm text-on-surface-variant text-center">
                    Não recebeu?{' '}
                    <button type="button" className="text-primary hover:underline font-semibold">
                      Reenviar código
                    </button>
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {mode === 'cadastro' && (
          <div className="w-full">
            <WizardStepper steps={cadastroSteps} current={
              step === 'dados' ? 0 : step === 'otp' ? 1 : 2
            } />

            {step === 'dados' && (
              <div className="w-full space-y-6 animate-fade-in-up min-h-[280px]">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value.replace(/[0-9]/g, ''))}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md h-14"
                    autoFocus
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(formatCpf(e.target.value))}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md text-center tracking-wider h-14"
                  />
                </div>

                <button
                  type="button"
                  disabled={!canAdvanceDados}
                  onClick={() => setStep('otp')}
                  className="w-full bg-primary-container text-on-primary-container font-label-caps text-label-caps py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 h-14"
                >
                  AVANÇAR
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            )}

            {step === 'otp' && (
              <div className="w-full space-y-6 animate-fade-in-up min-h-[280px]">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                    Telefone com DDD
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md text-center tracking-wider h-14"
                  />
                </div>

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
                      className="w-10 h-12 sm:w-12 sm:h-14 bg-surface-container-low border border-outline-variant rounded-xl text-center font-data-lg text-data-lg text-on-surface focus:border-primary focus:ring-0 transition-colors"
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('dados')}
                    className="flex-1 border border-outline-variant text-on-surface font-label-caps text-label-caps py-4 rounded-2xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 h-14"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    VOLTAR
                  </button>
                  <button
                    type="button"
                    disabled={!isOtpComplete}
                    onClick={() => setStep('pix')}
                    className="flex-1 bg-primary-container text-on-primary-container font-label-caps text-label-caps py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 h-14"
                  >
                    AVANÇAR
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>

                <p className="font-body-sm text-on-surface-variant text-center">
                  Não recebeu?{' '}
                  <button type="button" className="text-primary hover:underline font-semibold">
                    Reenviar código
                  </button>
                </p>
              </div>
            )}

            {step === 'pix' && (
              <div className="w-full space-y-6 animate-fade-in-up min-h-[280px]">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                    Tipo de Chave PIX
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {pixOptions.map((opt) => (
                      <button
                        key={opt.type}
                        type="button"
                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all min-h-[80px] ${
                          tipoPix === opt.type
                            ? 'bg-primary-container text-on-primary-container border-2 border-primary'
                            : 'bg-surface-container-low text-on-surface-variant border-2 border-transparent hover:bg-surface-container-highest'
                        }`}
                        onClick={() => setTipoPix(opt.type)}
                      >
                        <span className="material-symbols-outlined text-2xl">{opt.icon}</span>
                        <span className="font-label-caps text-label-caps">{opt.type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {tipoPix && (
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                      Chave PIX
                    </label>
                    <input
                      type="text"
                      placeholder={
                        tipoPix === 'CPF' ? 'Seu CPF' :
                        tipoPix === 'Telefone' ? 'Seu telefone' :
                        tipoPix === 'E-mail' ? 'Seu e-mail' :
                        'Sua chave aleatória'
                      }
                      value={chavePix}
                      onChange={(e) => setChavePix(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md text-center h-14"
                    />
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('otp')}
                    className="flex-1 border border-outline-variant text-on-surface font-label-caps text-label-caps py-4 rounded-2xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 h-14"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    VOLTAR
                  </button>
                  <button
                    type="button"
                    disabled={!chavePix}
                    onClick={handleVerify}
                    className="flex-1 bg-primary-container text-on-primary-container font-label-caps text-label-caps py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 h-14"
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                    CRIAR CONTA
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <p className="text-center font-body-sm text-body-sm text-outline max-w-xs">
          Ao continuar, você concorda com os{' '}
          <span className="text-primary hover:underline cursor-pointer">Termos de Uso</span>
          {' '}e{' '}
          <span className="text-primary hover:underline cursor-pointer">Política de Privacidade</span>.
        </p>

        <Link
          href="/dashboard"
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors"
        >
          PULAR POR ENQUANTO →
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
