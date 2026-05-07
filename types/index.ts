export type PoolStatus = 'ativo' | 'aguardando'
export type PaymentStatus = 'liquidado' | 'aguardando'
export type NavItem = 'summary' | 'pools' | 'create' | 'ledger'
export type AppBarVariant = 'full' | 'centered'

export interface Pool {
  id: string
  name: string
  code: string
  status: PoolStatus
  participants: { current: number; max: number }
  totalValue: number
}

export interface Member {
  id: string
  name: string
  avatar: string
  wallet: string
  contribution: number
  status: PaymentStatus
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
