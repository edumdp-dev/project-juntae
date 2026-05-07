'use client'

import { useState, useRef } from 'react'
import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { WizardStepper } from '@/components/ui/wizard-stepper'
import { Toast } from '@/components/ui/toast'

const steps = [
  { label: 'Identidade' },
  { label: 'Financeiro' },
  { label: 'Prazos' },
]

function formatCurrency(v: string) {
  const digits = v.replace(/\D/g, '')
  if (!digits) return ''
  const value = parseInt(digits, 10) / 100
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}

function formatDateBR(iso: string) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export default function CriarGrupoPage() {
  const [step, setStep] = useState(0)
  const [nome, setNome] = useState('')
  const [modelo, setModelo] = useState<'total' | 'por-integrante'>('total')
  const [valor, setValor] = useState('')
  const [integrantes, setIntegrantes] = useState(2)
  const [prazo, setPrazo] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const dateInputRef = useRef<HTMLInputElement>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setToastVisible(true)
  }

  const canAdvanceStep0 = nome.trim().length >= 3
  const canAdvanceStep1 = valor.replace(/\D/g, '').length >= 3
  const canAdvanceStep2 = prazo.length >= 8

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    showToast('Grupo criado com sucesso!')
    setTimeout(() => {
      window.location.href = `/pool/8829-X`
    }, 1500)
  }

  return (
    <>
      <TopAppBar variant="centered" />
      <main className="flex-grow flex items-start justify-center pt-24 pb-28 px-gutter">
        <div className="w-full max-w-2xl">
          <WizardStepper steps={steps} current={step} />

          <form onSubmit={handleSubmit} className="bg-surface-container border-t-4 border-primary p-margin rounded-2xl shadow-sm">
            {step === 0 && (
              <section className="space-y-6 animate-fade-in-up">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Nome do Grupo
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md h-14"
                    placeholder="Ex: Viagem de Verão 2024"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    autoFocus
                  />
                </div>

                <div className="flex items-center gap-6 p-4 bg-surface-container-lowest border border-outline-variant rounded-2xl">
                  <div className="relative w-20 h-20 bg-surface-container-highest rounded-xl flex items-center justify-center border-2 border-dashed border-outline overflow-hidden">
                    <span className="material-symbols-outlined text-outline">add_photo_alternate</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-label-caps text-label-caps text-on-surface">
                      Capa do Grupo
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      JPG, PNG até 5MB. Formato 1:1 recomendado.
                    </p>
                    <button
                      className="text-primary font-label-caps text-label-caps hover:underline mt-2 flex items-center gap-1"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm">upload_file</span>
                      UPLOAD ARQUIVO
                    </button>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    disabled={!canAdvanceStep0}
                    onClick={() => setStep(1)}
                    className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-3 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 h-12"
                  >
                    AVANÇAR
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </section>
            )}

            {step === 1 && (
              <section className="space-y-6 animate-fade-in-up">
                <div className="space-y-4">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Modelo de Arrecadação
                  </label>
                  <div className="grid grid-cols-2 gap-unit bg-surface-container-low p-1 rounded-2xl border border-outline-variant">
                    <button
                      className={`font-label-caps text-label-caps py-3 rounded-xl transition-all ${
                        modelo === 'total'
                          ? 'bg-primary-container text-on-primary-container'
                          : 'text-on-surface-variant hover:bg-surface-container-highest'
                      }`}
                      type="button"
                      onClick={() => setModelo('total')}
                    >
                      Total
                    </button>
                    <button
                      className={`font-label-caps text-label-caps py-3 rounded-xl transition-all ${
                        modelo === 'por-integrante'
                          ? 'bg-primary-container text-on-primary-container'
                          : 'text-on-surface-variant hover:bg-surface-container-highest'
                      }`}
                      type="button"
                      onClick={() => setModelo('por-integrante')}
                    >
                      p/ pessoa
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      Valor do Objetivo
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-data-md text-data-md text-primary">
                        R$
                      </span>
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 pl-12 focus:border-primary focus:ring-0 text-on-surface font-data-lg text-data-lg h-14"
                        type="text"
                        inputMode="numeric"
                        placeholder="0,00"
                        value={valor}
                        onChange={(e) => setValor(formatCurrency(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      Integrantes
                    </label>
                    <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-2xl overflow-hidden h-14">
                      <button
                        className="p-4 text-primary hover:bg-surface-container-highest transition-colors"
                        type="button"
                        onClick={() => setIntegrantes(Math.max(2, integrantes - 1))}
                      >
                        <span className="material-symbols-outlined">remove</span>
                      </button>
                      <input
                        className="flex-grow bg-transparent border-none text-center focus:ring-0 font-data-lg text-data-lg text-on-surface appearance-none"
                        type="number"
                        value={integrantes}
                        onChange={(e) => setIntegrantes(Math.max(2, parseInt(e.target.value) || 2))}
                        min={2}
                      />
                      <button
                        className="p-4 text-primary hover:bg-surface-container-highest transition-colors"
                        type="button"
                        onClick={() => setIntegrantes(integrantes + 1)}
                      >
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-3 rounded-2xl hover:bg-surface-container-high transition-colors flex items-center gap-2 h-12"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    VOLTAR
                  </button>
                  <button
                    type="button"
                    disabled={!canAdvanceStep1}
                    onClick={() => setStep(2)}
                    className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-3 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 h-12"
                  >
                    AVANÇAR
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </section>
            )}

            {step === 2 && (
              <section className="space-y-6 animate-fade-in-up">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Prazo de Encerramento
                  </label>
                  <div className="relative">
                    <input
                      ref={dateInputRef}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      type="date"
                      value={prazo}
                      onChange={(e) => setPrazo(e.target.value)}
                    />
                    <div
                      onClick={() => dateInputRef.current?.showPicker()}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 pr-12 focus:border-primary text-on-surface font-data-md text-data-md h-14 flex items-center cursor-pointer"
                    >
                      <span className={prazo ? 'text-on-surface' : 'text-outline/50'}>
                        {prazo
                          ? new Date(prazo + 'T12:00:00').toLocaleDateString('pt-BR')
                          : 'DD / MM / AAAA'}
                      </span>
                    </div>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">
                      calendar_month
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-low p-4 rounded-2xl space-y-2">
                  <h3 className="font-label-caps text-label-caps text-primary uppercase">Resumo</h3>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Grupo:</span>
                    <span className="text-on-surface font-semibold">{nome || '—'}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Modelo:</span>
                    <span className="text-on-surface font-semibold">{modelo === 'total' ? 'Total' : 'p/ pessoa'}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Valor:</span>
                    <span className="text-on-surface font-semibold">R$ {valor || '0,00'}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Integrantes:</span>
                    <span className="text-on-surface font-semibold">{integrantes}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Prazo:</span>
                    <span className="text-on-surface font-semibold">{formatDateBR(prazo)}</span>
                  </div>
                </div>

                <div className="bg-primary-container/10 border border-primary/20 p-4 rounded-2xl flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary">shield</span>
                  <div className="space-y-1">
                    <p className="font-label-caps text-label-caps text-primary uppercase">
                      Custódia Protegida
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Os valores arrecadados são mantidos em uma conta escrow isolada sob regras
                      de liquidação programadas.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-3 rounded-2xl hover:bg-surface-container-high transition-colors flex items-center gap-2 h-12"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    VOLTAR
                  </button>
                  <button
                    type="submit"
                    disabled={!canAdvanceStep2}
                    className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-3 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 h-12 whitespace-nowrap"
                  >
                    <span className="material-symbols-outlined">check</span>
                    CRIAR GRUPO
                  </button>
                </div>

                <p className="text-center font-body-sm text-body-sm text-outline pt-2">
                  Ao prosseguir, você concorda com os{' '}
                  <span className="text-primary hover:underline cursor-pointer">
                    Termos de Custódia
                  </span>{' '}
                  da rede.
                </p>
              </section>
            )}
          </form>
        </div>
      </main>
      <Navbar activeItem="create" />

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  )
}
