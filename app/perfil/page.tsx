'use client'

import { useState } from 'react'
import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { Toast } from '@/components/ui/toast'
import { ConfirmModal } from '@/components/ui/confirm-modal'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function PerfilPage() {
  const [copied, setCopied] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const { ref: headerRef, revealed: headerRevealed } = useScrollReveal()
  const { ref: statsRef, revealed: statsRevealed } = useScrollReveal()
  const { ref: infoRef, revealed: infoRevealed } = useScrollReveal()

  const handleCopyPix = () => {
    navigator.clipboard.writeText('joao.silva@email.com')
    setCopied(true)
  }

  return (
    <>
      <TopAppBar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin pt-24 pb-28">
        <section
          ref={headerRef}
          className={`flex flex-col items-center gap-4 mb-8 transition-all duration-500 ${headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-primary">
            <img
              alt="User Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8cMr954gqN2a-Mks3tEed6tL2RhRvU746guunVjQAZwSeec_-j0fq6fp8jgwCecAAAubrSMbgd9XAcyhpbfzCI4bYF8u9I1YVEs6-bO4JZ5t-6jkNDorSIbkvXUX5jqXiJdM5QqKn5CdZ1i2aF3zsJZHilnKxn03Tsk3hoCP65e2ziyZkAn-2i3F-B9gi3ezxBgij_YFbTz9C0efhDTcH0N7ODvtiQu8_slMmA8PQ-MAkKAcLHsO9o_wSb9DY6xCTTjHcVeYezTA"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="font-h2 text-h2 text-on-surface">João Silva</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              joao.silva@email.com
            </p>
          </div>
          <span className="bg-primary/10 text-primary px-3 py-1 font-label-caps text-label-caps rounded-full">
            VERIFICADO
          </span>
        </section>

        <section
          ref={statsRef}
          className={`grid grid-cols-3 gap-gutter mb-8 transition-all duration-500 delay-100 ${statsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="tonal-layer-1 p-4 rounded-2xl text-center hover:scale-[1.02] transition-all duration-200">
            <span className="font-data-lg text-data-lg text-primary">3</span>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">
              GRUPOS
            </p>
          </div>
          <div className="tonal-layer-1 p-4 rounded-2xl text-center hover:scale-[1.02] transition-all duration-200">
            <span className="font-data-lg text-data-lg text-primary">R$ 1.248,50</span>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">
              SALDO
            </p>
          </div>
          <div className="tonal-layer-1 p-4 rounded-2xl text-center hover:scale-[1.02] transition-all duration-200">
            <span className="font-data-lg text-data-lg text-primary">100%</span>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">
              EM DIA
            </p>
          </div>
        </section>

        <section
          ref={infoRef}
          className={`transition-all duration-500 delay-200 ${infoRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="bg-surface-container rounded-2xl overflow-hidden mb-8">
            <div className="p-margin border-b border-outline-variant">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant">
                DADOS PESSOAIS
              </h3>
            </div>
            <div className="divide-y divide-outline-variant">
              <div className="flex justify-between items-center p-margin hover:bg-surface-container-high transition-colors">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">
                    NOME COMPLETO
                  </p>
                  <p className="font-body-md text-on-surface mt-1">João Silva</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-margin hover:bg-surface-container-high transition-colors">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">
                    CPF
                  </p>
                  <p className="font-data-md text-data-md text-on-surface mt-1">
                    123.456.789-00
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-margin hover:bg-surface-container-high transition-colors">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">
                    TELEFONE
                  </p>
                  <p className="font-body-md text-on-surface mt-1">(11) 91234-5678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container rounded-2xl overflow-hidden mb-8">
            <div className="p-margin border-b border-outline-variant">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant">
                CHAVE PIX
              </h3>
            </div>
            <div className="p-margin">
              <div className="flex items-center gap-unit bg-surface-container-low border border-outline-variant p-3 rounded-xl">
                <span className="material-symbols-outlined text-primary">pix</span>
                <span className="font-data-md text-data-md text-on-surface flex-1">
                  joao.silva@email.com
                </span>
                <button
                  onClick={handleCopyPix}
                  className="p-2 rounded-lg hover:bg-surface-container-highest transition-colors active:scale-90"
                >
                  <span className="material-symbols-outlined text-primary text-sm">
                    content_copy
                  </span>
                </button>
              </div>
              <p className="font-body-sm text-on-surface-variant mt-3">
                Tipo: E-mail · Cadastrada em 15/03/2024
              </p>
            </div>
          </div>

          <div className="bg-surface-container rounded-2xl overflow-hidden mb-8">
            <div className="p-margin border-b border-outline-variant">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant">
                CONFIGURAÇÕES
              </h3>
            </div>
            <div className="divide-y divide-outline-variant">
              <button className="flex justify-between items-center p-margin w-full hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant">notifications_active</span>
                  <span className="font-body-md text-on-surface">Notificações</span>
                </div>
                <span className="material-symbols-outlined text-outline">chevron_right</span>
              </button>
              <button className="flex justify-between items-center p-margin w-full hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant">shield_person</span>
                  <span className="font-body-md text-on-surface">Segurança</span>
                </div>
                <span className="material-symbols-outlined text-outline">chevron_right</span>
              </button>
              <button className="flex justify-between items-center p-margin w-full hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant">support_agent</span>
                  <span className="font-body-md text-on-surface">Ajuda & Suporte</span>
                </div>
                <span className="material-symbols-outlined text-outline">chevron_right</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => setShowLogout(true)}
            className="w-full border border-error text-error font-label-caps text-label-caps py-4 rounded-2xl hover:bg-error/10 transition-colors flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">logout</span>
            SAIR DA CONTA
          </button>
        </section>
      </main>
      <Navbar activeItem="summary" />

      <Toast
        message="Chave PIX copiada!"
        visible={copied}
        onClose={() => setCopied(false)}
      />

      <ConfirmModal
        open={showLogout}
        title="Sair da Conta"
        description="Tem certeza que deseja sair? Você precisará fazer login novamente para acessar seus grupos."
        confirmLabel="Sair"
        variant="danger"
        onConfirm={() => {
          setShowLogout(false)
          window.location.href = '/auth'
        }}
        onCancel={() => setShowLogout(false)}
      />
    </>
  )
}
