import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'
import { ItHomeConstants, ItHomeListRank } from '@/constants/it.home.constants'

export class iTHomeParamDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		enum: Object.keys(ItHomeConstants),
		schema: {
			type: 'string',
			example: 'read',
			enum: Object.keys(ItHomeConstants),
			'x-apifox-enum': transformConstantsToOptions(ItHomeConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(ItHomeConstants), { message: validateMessage('rank') })
	rank: keyof typeof ItHomeConstants

	@ApiPropertyExtend({
		description: '榜单时间类型',
		enum: Object.keys(ItHomeListRank),
		schema: {
			type: 'string',
			example: 'day',
			enum: Object.keys(ItHomeListRank),
			'x-apifox-enum': transformConstantsToOptions(ItHomeListRank)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(ItHomeListRank), { message: validateMessage('type') })
	type: keyof typeof ItHomeListRank
}
