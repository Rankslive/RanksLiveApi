import { BiliBiliRank } from '@/modules/bilibili/constants/bilibili.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { BiliBiliRankType } from './types/bilibili'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class BiliBiliRankParamDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		schema: {
			type: 'string',
			example: 'anime',
			enum: Object.keys(BiliBiliRank),
			'x-apifox-enum': transformConstantsToOptions(BiliBiliRank)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(BiliBiliRank), { message: validateMessage('type') })
	type: BiliBiliRankType
}
