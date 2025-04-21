import { WeReadConstants } from '@/constants/we.read.constants'

export type WeReadCategoryType = WeReadConstants[keyof typeof WeReadConstants]

export interface WeReadRankUrl {
	surge: string // 飙升榜
	hotSearch: string // 热搜榜
	newBook: string // 新书榜
	novel: string // 小说榜
	overall: string // 总榜
	special: string // 神作榜
	specialPotential: string // 神作潜力榜
}
