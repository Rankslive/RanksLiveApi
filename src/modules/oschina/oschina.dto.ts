import { OschinaGroupType } from './types/oschina'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { oschinaGroups } from '@/modules/oschina/constants/oschina.constants'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class OschinaGroupParamDto {
	@ApiPropertyExtend({
		description: '榜单类型',
		enum: Object.keys(oschinaGroups),
		schema: {
			type: 'string',
			enum: Object.keys(oschinaGroups),
			example: 'ascend',
			'x-apifox-enum': transformConstantsToOptions(oschinaGroups)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(oschinaGroups), { message: validateMessage('type') })
	type: OschinaGroupType
}
