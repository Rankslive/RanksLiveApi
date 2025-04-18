import { zhihuConstants, zhihuCreatorDomainType, zhihuPeriodType, zhihuSortType } from '@/constants/zhihu.constants'

export type zhihuSubScenesType = zhihuConstants[keyof typeof zhihuConstants]

export type PeriodType = zhihuPeriodType[keyof typeof zhihuPeriodType]

export type SortType = zhihuSortType[keyof typeof zhihuSortType]

export type DomainTypes = zhihuCreatorDomainType[keyof typeof zhihuCreatorDomainType]
