import { JuejinAuthorConstants, JuejinConstants } from '@/constants/juejin.constants'
import { IsEnum } from 'class-validator'
import { JueJinType } from '../../../types/juejin'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class JuejinArticleDto {
	@ApiPropertyExtend({
		description: '榜单类别',
		schema: {
			type: 'string',
			enum: Object.keys(JuejinConstants),
			example: 'all',
			'x-apifox-enum': transformConstantsToOptions(JuejinConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(JuejinConstants), { message: validateMessage('type') })
	type: JueJinType
}

export class JuejinAuthorDto {
	@ApiPropertyExtend({
		description: '榜单类别',
		schema: {
			type: 'string',
			enum: Object.keys(JuejinAuthorConstants),
			example: 'backend',
			'x-apifox-enum': transformConstantsToOptions(JuejinAuthorConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(JuejinAuthorConstants), { message: validateMessage('type') })
	type: JueJinType
}
