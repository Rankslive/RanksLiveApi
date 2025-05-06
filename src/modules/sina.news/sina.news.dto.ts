import { sinaNewsConstants } from '@/modules/sina.news/constants/sina.news.constants'
import { sinaNewsType } from './types/sina.news'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class SinaNewsParamDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		enum: Object.keys(sinaNewsConstants),
		schema: {
			type: 'string',
			enum: Object.keys(sinaNewsConstants),
			example: 'all',
			'x-apifox-enum': transformConstantsToOptions(sinaNewsConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(sinaNewsConstants), { message: validateMessage('type') })
	type: sinaNewsType = 'all'
}
