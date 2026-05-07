import type { Pool, PoolDetail } from '@/types'

export const mockPools: Pool[] = [
  {
    id: '8829-X',
    name: 'Pool Alpha Institutional',
    code: 'ID-8829-X',
    status: 'ativo',
    participants: { current: 12, max: 15 },
    totalValue: 450_000,
  },
  {
    id: '4421-B',
    name: 'Global Real Estate Bond',
    code: 'ID-4421-B',
    status: 'aguardando',
    participants: { current: 8, max: 10 },
    totalValue: 798_500,
  },
  {
    id: '1092-K',
    name: 'Tech Liquidity Fund',
    code: 'ID-1092-K',
    status: 'ativo',
    participants: { current: 5, max: 5 },
    totalValue: 1_000,
  },
]

export const mockPoolDetail: PoolDetail = {
  id: '992',
  name: 'Pool Alpha Institutional',
  code: 'JNT-992-X82',
  targetAmount: 15_000,
  currentAmount: 12_450,
  percentage: 83,
  escrowNode: 'ESCROW NODE #001',
  deadline: '25 Out 2023',
  adminLabel: 'NODE_ADMIN_01',
  inviteCode: 'JNT-992-X82',
  monthlyContribution: 50,
  members: [
    { id: '1', name: 'Alex Murphy', wallet: '0x4F...E821', contribution: 50, status: 'liquidado', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgdn250ZzC20d2i6VnCa4YSmTPmZUIu2W6str0W5qe4QOV2qBfjmoxoc0L5AmdRfc0UJuwAR0sAl-06d8_YnZoPzaxpDXml5_TjzPRKwvVeSIts-C9k7hqcd7AU_W8PEF5knFNCdPWFxU12Dnd5FLKCkAVQMhpf8TmwMQKkQSO42i15MhndU7FC7ggFEKkdapqFLMpoDauDJNaEGlZnFlJb_N4AkgCRdRkKsG06xLL7dwEY1b0QqYMj40x2So4zskgyVG8prEgY-fB' },
    { id: '2', name: 'Jean-Luc Picard', wallet: '0x92...A11B', contribution: 50, status: 'liquidado', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc-ckvukId4inEq9ISBfoRoFzpbpxv9WENgsFgxndDgPkq1LqheZO-5bdVmcWrnPLjB3RLz6BLaRwZL61f2Q0Xr5cOvm1qHskXTJhyWIXSo8L2xxxLjiCaS1dSjo0c2oPI2pN1cG9SndXImSa4I5Gh77RHDG5s2g-CDx-jky-TG1zJ_37GOUIJ45g5WlF8PS-64awQH3_yPqn48GEq_vULrvlhNkzEqDtzXBrOyeAwtPvAYtNrmKU6RR8ytIfc3xWlO-FQU_ShiYqX' },
    { id: '3', name: 'Sarah Connor', wallet: '0xA1...772C', contribution: 50, status: 'aguardando', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX_s9WCji5r5iRm3GPgoZ5EGfFIBRPiiedUHvmPVCwWC2A_zAGTwNYLi9gD6tLeOTJZ4Q5lla719w9o3FeLK1edbSwGz4yIPFXwFBdynH7uH_FzLnw74SRRHoRJeKjkXDw2rkWDYuDuwtwh_Wamr2nkqQpfnnQ0edfV7ayTZbKi-0HLJ4zaRvDsJZic-Ip6oii9BWbwaGvY5w3S9VbxM2_1evvqWLmP_pm2Uq9oYxo3-Gxr3UKXQXnSgG2ROJEvcBzY4EedVNBjHJt' },
    { id: '4', name: 'Ellen Ripley', wallet: '0xCC...F390', contribution: 50, status: 'liquidado', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKCGY1Ve1xC82ceKkkgcokjUndKnf2AhYDwsLEGizcYMSg4A6EXXmpYWqQAx__UKjrYzBrNNsz3In9KJzwdDvHBBZBlKmlO1kRSwtqXRq-uMohSjeDdA7BFLaMTRt9O66i9gimfjM8cVdWI0ds9Z6_VjDF7-gRlf_IuijuBIMN_kNdda7UHUqesuEhs8rEXrjHYZes2N9M7j8ra2_Bl-JZtBeoiTwlN382uMS6siB3h2h3vtCnmVFdAhzMPbEpVZDS7wzeqKLQbk_2' },
  ],
}

export async function getPools(): Promise<Pool[]> {
  return mockPools
}

export async function getPoolById(id: string): Promise<PoolDetail | null> {
  return mockPoolDetail
}
