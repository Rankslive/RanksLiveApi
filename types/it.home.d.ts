import { ItHomeConstants } from '@/constants/it.home.constants'

export type ItHomeType = (typeof ItHomeConstants)[keyof typeof ItHomeConstants]

export type ItHomeListType = 'day' | 'week' | 'month'
