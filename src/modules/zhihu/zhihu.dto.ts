import { zhihuCreatorDomainType, zhihuPeriodType, zhihuSortType } from '@/constants/zhihu.constants'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'
import { DomainTypes, PeriodType, SortType } from '../../../types/zhihu'

export class ZhiHuPotentialQuestionDto {
	@IsEnum(Object.keys(zhihuCreatorDomainType), { message: validateMessage('domain') })
	domain: DomainTypes

	@IsEnum(Object.keys(zhihuSortType), { message: validateMessage('sortType') })
	sortType: SortType
}

export class ZhiHuHotQuestionDto {
	@IsEnum(Object.keys(zhihuCreatorDomainType), { message: validateMessage('domain') })
	domain: DomainTypes

	@IsEnum(Object.keys(zhihuPeriodType), { message: validateMessage('period') })
	period: PeriodType
}
