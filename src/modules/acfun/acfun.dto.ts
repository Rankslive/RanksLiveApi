import { AcfunChanelType } from './types/acfun'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { AcfunConstants } from '@/modules/acfun/constants/acfun.constants'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class AcfunParamDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		schema: {
			type: 'string',
			enum: Object.keys(AcfunConstants),
			example: 'all',
			'x-apifox-enum': transformConstantsToOptions(AcfunConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(AcfunConstants), { message: validateMessage('type') })
	type: AcfunChanelType
}
