import { YQqConstants } from '../constants/y.qq.constants'

export type YQqTopType = (typeof YQqConstants)[keyof typeof YQqConstants]['value']

export interface RankListItem {
    title: string
    topId: number
    period: string
}
