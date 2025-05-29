import { ItHomeConstants, ItHomeListRank } from '../constants/it.home.constants'

export type ItHomeType = (typeof ItHomeConstants)[keyof typeof ItHomeConstants]['type']

export type ItHomeListRankType = keyof typeof ItHomeListRank
