export type PoolStatus = 'ativo' | 'aguardando' | 'encerrado'
export type PaymentStatus = 'pago' | 'pendente'
export type NavItem = 'summary' | 'pools' | 'create' | 'ledger'
export type AppBarVariant = 'full' | 'centered'

export interface Pool {
  id: string
  name: string
  code: string
  status: PoolStatus
  participants: { current: number; max: number }
  totalValue: number
  category?: string
}

export interface Member {
  id: string
  name: string
  avatar: string
  cpf: string
  contribution: number
  status: PaymentStatus
}

export interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  type: 'entrada' | 'saida'
  status: 'confirmado' | 'pendente'
  poolName?: string
}

export interface PoolDetail {
  id: string
  name: string
  code: string
  targetAmount: number
  currentAmount: number
  percentage: number
  escrowNode: string
  deadline: string
  adminLabel: string
  inviteCode: string
  monthlyContribution: number
  members: Member[]
}
