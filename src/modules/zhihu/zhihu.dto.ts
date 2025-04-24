import { zhihuCreatorDomain, zhihuPeriod, zhihuSort } from '@/constants/zhihu.constants'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'
import { DomainType, PeriodType, SortType } from '../../../types/zhihu'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class ZhiHuPotentialQuestionDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		schema: {
			type: 'string',
			enum: Object.keys(zhihuCreatorDomain),
			'x-apifox-enum': transformConstantsToOptions(zhihuCreatorDomain)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(zhihuCreatorDomain), { message: validateMessage('domain') })
	domain: DomainType

	@ApiPropertyExtend({
		description: '排序类型',
		schema: {
			type: 'string',
			enum: Object.keys(zhihuSort),
			'x-apifox-enum': transformConstantsToOptions(zhihuSort)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(zhihuSort), { message: validateMessage('sortType') })
	sortType: SortType
}

export class ZhiHuHotQuestionDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		schema: {
			type: 'string',
			enum: Object.keys(zhihuCreatorDomain),
			'x-apifox-enum': transformConstantsToOptions(zhihuCreatorDomain)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(zhihuCreatorDomain), { message: validateMessage('domain') })
	domain: DomainType

	@ApiPropertyExtend({
		description: '榜单周期',
		schema: {
			type: 'string',
			enum: Object.keys(zhihuPeriod),
			'x-apifox-enum': transformConstantsToOptions(zhihuPeriod)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(zhihuPeriod), { message: validateMessage('period') })
	period: PeriodType
}
