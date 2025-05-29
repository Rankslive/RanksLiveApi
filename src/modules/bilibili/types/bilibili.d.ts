import { BiliBiliRank } from '../constants/bilibili.constants'

export type BiliBiliRankType = keyof typeof BiliBiliRank
export type BiliBiliSeasonType = (typeof BiliBiliRank)[keyof typeof BiliBiliRank]['value']
