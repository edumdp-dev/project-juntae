import type { Pool, PoolDetail, Transaction } from '@/types'

export const mockPools: Pool[] = [
  {
    id: '8829-X',
    name: 'Bolão Copa 2026',
    code: 'JNT-8829-X',
    status: 'ativo',
    participants: { current: 8, max: 15 },
    totalValue: 2_500,
    category: 'Esportes',
  },
  {
    id: '4421-B',
    name: 'Roda de Amigos - Junina',
    code: 'JNT-4421-B',
    status: 'aguardando',
    participants: { current: 4, max: 10 },
    totalValue: 1_800,
    category: 'Festa',
  },
  {
    id: '1092-K',
    name: 'Vaquinha Churrasco Sábado',
    code: 'JNT-1092-K',
    status: 'ativo',
    participants: { current: 5, max: 5 },
    totalValue: 750,
    category: 'Confraternização',
  },
  {
    id: '3301-M',
    name: 'Presente Casamento Lúcia',
    code: 'JNT-3301-M',
    status: 'encerrado',
    participants: { current: 12, max: 12 },
    totalValue: 3_200,
    category: 'Presente',
  },
]

export const mockPoolDetail: PoolDetail = {
  id: '992',
  name: 'Bolão Copa 2026',
  code: 'JNT-8829-X',
  targetAmount: 2_500,
  currentAmount: 2_150,
  percentage: 86,
  escrowNode: 'Nó de Custódia #001',
  deadline: '28 Jun 2026',
  adminLabel: 'Administrador',
  inviteCode: 'JNT-8829-X',
  monthlyContribution: 150,
  members: [
    { id: '1', name: 'João Pedro Almeida', cpf: '***.456.789-**', contribution: 150, status: 'pago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgdn250ZzC20d2i6VnCa4YSmTPmZUIu2W6str0W5qe4QOV2qBfjmoxoc0L5AmdRfc0UJuwAR0sAl-06d8_YnZoPzaxpDXml5_TjzPRKwvVeSIts-C9k7hqcd7AU_W8PEF5knFNCdPWFxU12Dnd5FLKCkAVQMhpf8TmwMQKkQSO42i15MhndU7FC7ggFEKkdapqFLMpoDauDJNaEGlZnFlJb_N4AkgCRdRkKsG06xLL7dwEY1b0QqYMj40x2So4zskgyVG8prEgY-fB' },
    { id: '2', name: 'Maria Fernanda Costa', cpf: '***.789.123-**', contribution: 150, status: 'pago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc-ckvukId4inEq9ISBfoRoFzpbpxv9WENgsFgxndDgPkq1LqheZO-5bdVmcWrnPLjB3RLz6BLaRwZL61f2Q0Xr5cOvm1qHskXTJhyWIXSo8L2xxxLjiCaS1dSjo0c2oPI2pN1cG9SndXImSa4I5Gh77RHDG5s2g-CDx-jky-TG1zJ_37GOUIJ45g5WlF8PS-64awQH3_yPqn48GEq_vULrvlhNkzEqDtzXBrOyeAwtPvAYtNrmKU6RR8ytIfc3xWlO-FQU_ShiYqX' },
    { id: '3', name: 'Carlos Eduardo Silva', cpf: '***.234.567-**', contribution: 150, status: 'pendente', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX_s9WCji5r5iRm3GPgoZ5EGfFIBRPiiedUHvmPVCwWC2A_zAGTwNYLi9gD6tLeOTJZ4Q5lla719w9o3FeLK1edbSwGz4yIPFXwFBdynH7uH_FzLnw74SRRHoRJeKjkXDw2rkWDYuDuwtwh_Wamr2nkqQpfnnQ0edfV7ayTZbKi-0HLJ4zaRvDsJZic-Ip6oii9BWbwaGvY5w3S9VbxM2_1evvqWLmP_pm2Uq9oYxo3-Gxr3UKXQXnSgG2ROJEvcBzY4EedVNBjHJt' },
    { id: '4', name: 'Ana Beatriz Souza', cpf: '***.890.123-**', contribution: 150, status: 'pago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKCGY1Ve1xC82ceKkkgcokjUndKnf2AhYDwsLEGizcYMSg4A6EXXmpYWqQAx__UKjrYzBrNNsz3In9KJzwdDvHBBZBlKmlO1kRSwtqXRq-uMohSjeDdA7BFLaMTRt9O66i9gimfjM8cVdWI0ds9Z6_VjDF7-gRlf_IuijuBIMN_kNdda7UHUqesuEhs8rEXrjHYZes2N9M7j8ra2_Bl-JZtBeoiTwlN382uMS6siB3h2h3vtCnmVFdAhzMPbEpVZDS7wzeqKLQbk_2' },
  ],
}

export const mockTransactions: Transaction[] = [
  { id: '1', date: '05 Mai 2026', description: 'Contribuição - Bolão Copa 2026', amount: 150, type: 'saida', status: 'confirmado', poolName: 'Bolão Copa 2026' },
  { id: '2', date: '28 Abr 2026', description: 'Contribuição - Roda de Amigos', amount: 180, type: 'saida', status: 'confirmado', poolName: 'Roda de Amigos - Junina' },
  { id: '3', date: '20 Abr 2026', description: 'Prêmio recebido - Vaquinha Churrasco', amount: 750, type: 'entrada', status: 'confirmado', poolName: 'Vaquinha Churrasco Sábado' },
  { id: '4', date: '15 Abr 2026', description: 'Contribuição - Vaquinha Churrasco', amount: 150, type: 'saida', status: 'confirmado', poolName: 'Vaquinha Churrasco Sábado' },
  { id: '5', date: '10 Abr 2026', description: 'Contribuição - Bolão Copa 2026', amount: 150, type: 'saida', status: 'pendente', poolName: 'Bolão Copa 2026' },
  { id: '6', date: '01 Abr 2026', description: 'Estorno - Bolão Copa 2026', amount: 150, type: 'entrada', status: 'confirmado', poolName: 'Bolão Copa 2026' },
]

export async function getPools(): Promise<Pool[]> {
  return mockPools
}

export async function getPoolById(id: string): Promise<PoolDetail | null> {
  return mockPoolDetail
}

export async function getTransactions(): Promise<Transaction[]> {
  return mockTransactions
}
