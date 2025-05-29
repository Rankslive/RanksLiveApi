import { DoubanConstants } from '../constants/douban.constants'

export type douBanType = (typeof DoubanConstants)[keyof typeof DoubanConstants]['value']

export interface IDouBanRankWeekly {
    // 一周口碑电影榜
    movie: string
    // 华语口碑剧集榜
    tv_chinese: string
    // 全球口碑剧集榜
    tv_global: string
    // 国内口碑综艺榜
    show_chinese: string
    // 国外口碑综艺榜
    show_global: string
}

export type DouBanRankWeeklyType = keyof IDouBanRankWeekly
