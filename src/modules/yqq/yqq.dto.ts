import { YQqConstants } from '@/modules/yqq/constants/y.qq.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class YQqParamDto {
	@ApiPropertyExtend({
		description: '类型',
		enum: Object.keys(YQqConstants),
		schema: {
			type: 'string',
			enum: Object.keys(YQqConstants),
			example: 'surge',
			'x-apifox-enum': transformConstantsToOptions(YQqConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(YQqConstants), { message: validateMessage('type') })
	type: keyof typeof YQqConstants
}
