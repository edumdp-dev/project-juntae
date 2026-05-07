import { TopAppBar } from '@/components/ui/top-app-bar'
import { Navbar } from '@/components/ui/navbar'
import { StatusBadge } from '@/components/ui/status-badge'
import Link from 'next/link'

export default function PerfilPage() {
  return (
    <>
      <TopAppBar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin pt-24 pb-24">
        {/* Avatar & Name */}
        <section className="flex flex-col items-center gap-4 mb-8">
          <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-primary">
            <img
              alt="User Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8cMr954gqN2a-Mks3tEed6tL2RhRvU746guunVjQAZwSeec_-j0fq6fp8jgwCecAAAubrSMbgd9XAcyhpbfzCI4bYF8u9I1YVEs6-bO4JZ5t-6jkNDorSIbkvXUX5jqXiJdM5QqKn5CdZ1i2aF3zsJZHilnKxn03Tsk3hoCP65e2ziyZkAn-2i3F-B9gi3ezxBgij_YFbTz9C0efhDTcH0N7ODvtiQu8_slMmA8PQ-MAkKAcLHsO9o_wSb9DY6xCTTjHcVeYezTA"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="font-h2 text-h2 text-on-surface">João Silva</h2>
            <p className="font-data-md text-data-md text-on-surface-variant">
              0x7A...3F21
            </p>
          </div>
          <span className="bg-primary/10 text-primary px-3 py-1 font-label-caps text-label-caps rounded-full">
            NÓ ATIVO
          </span>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-3 gap-gutter mb-8">
          <div className="tonal-layer-1 p-4 rounded-2xl text-center">
            <span className="font-data-lg text-data-lg text-primary">3</span>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">
              GRUPOS
            </p>
          </div>
          <div className="tonal-layer-1 p-4 rounded-2xl text-center">
            <span className="font-data-lg text-data-lg text-primary">R$ 1.248</span>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">
              CUSTODIADO
            </p>
          </div>
          <div className="tonal-layer-1 p-4 rounded-2xl text-center">
            <span className="font-data-lg text-data-lg text-primary">100%</span>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">
              CONFORMIDADE
            </p>
          </div>
        </section>

        {/* Personal Info */}
        <section className="bg-surface-container rounded-2xl overflow-hidden mb-8">
          <div className="p-margin border-b border-outline-variant">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant">
              DADOS PESSOAIS
            </h3>
          </div>
          <div className="divide-y divide-outline-variant">
            <div className="flex justify-between items-center p-margin">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant">
                  NOME COMPLETO
                </p>
                <p className="font-body-md text-on-surface mt-1">João Silva</p>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <div className="flex justify-between items-center p-margin">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant">
                  CPF
                </p>
                <p className="font-data-md text-data-md text-on-surface mt-1">
                  ***.456.789-**
                </p>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <div className="flex justify-between items-center p-margin">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant">
                  TELEFONE
                </p>
                <p className="font-body-md text-on-surface mt-1">(11) 9****-9999</p>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
          </div>
        </section>

        {/* PIX Key */}
        <section className="bg-surface-container rounded-2xl overflow-hidden mb-8">
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
              <button className="p-2 rounded-lg hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-primary text-sm">
                  content_copy
                </span>
              </button>
            </div>
            <p className="font-body-sm text-on-surface-variant mt-3">
              Tipo: E-mail · Cadastrada em 15/03/2024
            </p>
          </div>
        </section>

        {/* Settings */}
        <section className="bg-surface-container rounded-2xl overflow-hidden mb-8">
          <div className="p-margin border-b border-outline-variant">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant">
              CONFIGURAÇÕES
            </h3>
          </div>
          <div className="divide-y divide-outline-variant">
            <button className="flex justify-between items-center p-margin w-full hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-on-surface-variant">
                  notifications
                </span>
                <span className="font-body-md text-on-surface">Notificações</span>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </button>
            <button className="flex justify-between items-center p-margin w-full hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-on-surface-variant">
                  security
                </span>
                <span className="font-body-md text-on-surface">Segurança</span>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </button>
            <button className="flex justify-between items-center p-margin w-full hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-on-surface-variant">
                  help
                </span>
                <span className="font-body-md text-on-surface">Ajuda & Suporte</span>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Logout */}
        <Link
          href="/auth"
          className="w-full border border-error text-error font-label-caps text-label-caps py-4 rounded-2xl hover:bg-error/10 transition-colors flex items-center justify-center gap-3"
        >
          <span className="material-symbols-outlined">logout</span>
          SAIR DA CONTA
        </Link>
      </main>
      <Navbar activeItem="summary" />
    </>
  )
}
