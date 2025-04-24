import { NeteaseConstants } from '@/constants/netease.constants'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'

export class NeteaseParamDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		enum: Object.keys(NeteaseConstants),
		schema: {
			type: 'string',
			example: 'surge',
			enum: Object.keys(NeteaseConstants),
			'x-apifox-enum': transformConstantsToOptions(NeteaseConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(NeteaseConstants), { message: validateMessage('type') })
	type: keyof typeof NeteaseConstants
}
