import { DoubanConstants } from '@/modules/douban/constants/douban.constants'

export type douBanType = (typeof DoubanConstants)[keyof typeof DoubanConstants]['value']
