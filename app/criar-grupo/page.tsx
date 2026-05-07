'use client'

import { useState } from 'react'
import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { WizardStepper } from '@/components/ui/wizard-stepper'

const steps = [
  { label: 'Identidade' },
  { label: 'Financeiro' },
  { label: 'Prazos' },
]

export default function CriarGrupoPage() {
  const [step] = useState(0)

  return (
    <>
      <TopAppBar variant="centered" />
      <main className="flex-grow flex items-start justify-center pt-24 pb-24 px-gutter">
        <div className="w-full max-w-2xl">
          <WizardStepper steps={steps} current={step} />

          <div className="bg-surface-container border-t-4 border-primary p-margin rounded-2xl shadow-sm">
            <form className="space-y-8">
              <section className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                    Identificação da Pool
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-outline/50 font-body-md"
                    placeholder="Ex: Viagem de Verão 2024"
                    type="text"
                  />
                </div>

                <div className="flex items-center gap-6 p-4 bg-surface-container-lowest border border-outline-variant rounded-2xl">
                  <div className="relative w-20 h-20 bg-surface-container-highest rounded-xl flex items-center justify-center border-2 border-dashed border-outline overflow-hidden">
                    <span className="material-symbols-outlined text-outline">add_a_photo</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-label-caps text-label-caps text-on-surface">
                      Capa do Grupo
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      JPG, PNG até 5MB. Formato 1:1 recomendado.
                    </p>
                    <button
                      className="text-primary font-label-caps text-label-caps hover:underline mt-2"
                      type="button"
                    >
                      UPLOAD ARQUIVO
                    </button>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="space-y-4">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                    Modelo de Arrecadação
                  </label>
                  <div className="grid grid-cols-2 gap-unit bg-surface-container-low p-1 rounded-2xl border border-outline-variant">
                    <button
                      className="bg-primary-container text-on-primary-container font-label-caps text-label-caps py-3 rounded-xl transition-all"
                      type="button"
                    >
                      VALOR TOTAL
                    </button>
                    <button
                      className="text-on-surface-variant font-label-caps text-label-caps py-3 rounded-xl hover:bg-surface-container-highest transition-all"
                      type="button"
                    >
                      POR INTEGRANTE
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                      Valor do Objetivo
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-data-md text-data-md text-primary">
                        R$
                      </span>
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 pl-12 focus:border-primary focus:ring-0 text-on-surface font-data-lg text-data-lg"
                        type="text"
                        defaultValue="0,00"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                      Integrantes
                    </label>
                    <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-2xl overflow-hidden">
                      <button className="p-4 text-primary hover:bg-surface-container-highest" type="button">
                        <span className="material-symbols-outlined">remove</span>
                      </button>
                      <input
                        className="flex-grow bg-transparent border-none text-center focus:ring-0 font-data-lg text-data-lg text-on-surface"
                        type="number"
                        defaultValue={1}
                      />
                      <button className="p-4 text-primary hover:bg-surface-container-highest" type="button">
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase ml-2">
                    Prazo de Encerramento
                  </label>
                  <div className="relative group">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline group-focus-within:text-primary">
                      calendar_month
                    </span>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:border-primary focus:ring-0 text-on-surface font-data-md text-data-md"
                      placeholder="DD / MM / AAAA"
                      type="text"
                    />
                  </div>
                </div>
              </section>

              <div className="bg-primary-container/10 border border-primary/20 p-4 rounded-2xl flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div className="space-y-1">
                  <p className="font-label-caps text-label-caps text-primary uppercase">
                    Custódia Segura
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Os valores arrecadados são mantidos em uma conta escrow isolada sob regras
                    de liquidação programadas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <button
                  className="w-full bg-primary-container text-on-primary-container font-h2 text-h2 py-4 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg"
                  type="submit"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    security
                  </span>
                  CRIAR GRUPO SEGURO
                </button>
                <p className="text-center font-body-sm text-body-sm text-outline">
                  Ao prosseguir, você concorda com as{' '}
                  <span className="text-primary hover:underline cursor-pointer">
                    Normas de Compliance
                  </span>{' '}
                  da rede.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Navbar activeItem="create" />
    </>
  )
}
