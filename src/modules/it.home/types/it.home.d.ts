import { ItHomeConstants, ItHomeListRank } from '@/modules/it.home/constants/it.home.constants'

export type ItHomeType = (typeof ItHomeConstants)[keyof typeof ItHomeConstants]['type']

export type ItHomeListRankType = keyof typeof ItHomeListRank
