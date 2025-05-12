import {
    zhihuConstants,
    zhihuCreatorDomain,
    zhihuPeriod,
    zhihuSort,
    zhihuSortType
} from '@/modules/zhihu/constants/zhihu.constants'

export type zhihuSubScenesType = `${zhihuConstants}`

export type PeriodType = (typeof zhihuPeriod)[keyof typeof zhihuPeriod]['value']

export type SortType = (typeof zhihuSort)[keyof typeof zhihuSort]['value']

export type DomainType = keyof typeof zhihuCreatorDomain

export type DomainValueType = (typeof zhihuCreatorDomain)[keyof typeof zhihuCreatorDomain]['value']
