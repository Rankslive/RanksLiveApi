import { ThreeSixKrConstants } from '@/constants/three.six.kr.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class ThreeSixKrParamDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		enum: Object.keys(ThreeSixKrConstants),
		schema: {
			type: 'string',
			enum: Object.keys(ThreeSixKrConstants),
			example: 'hot',
			'x-apifox-enum': transformConstantsToOptions(ThreeSixKrConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(ThreeSixKrConstants), { message: validateMessage('type') })
	type: keyof typeof ThreeSixKrConstants
}
