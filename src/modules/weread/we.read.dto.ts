import { WeReadConstants } from '@/constants/we.read.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class WeReadParamDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		enum: Object.keys(WeReadConstants),
		schema: {
			type: 'string',
			example: 'surge',
			enum: Object.keys(WeReadConstants),
			'x-apifox-enum': transformConstantsToOptions(WeReadConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(WeReadConstants), { message: validateMessage('type') })
	type: keyof typeof WeReadConstants
}
