import { DoubanConstants } from '@/constants/douban.constants'

export type douBanType = (typeof DoubanConstants)[keyof typeof DoubanConstants]['value']
