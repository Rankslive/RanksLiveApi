import { cloudTencentTypeKey, cloudTencentZoneTypeKey } from '@/modules/cloud.tencent/types/cloud.tencent'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import {
	cloudTencentConstants,
	cloudTencentZoneConstants
} from '@/modules/cloud.tencent/constants/cloud.tencent.constants'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'

export class CloudTencentParamDto {
	@ApiPropertyExtend({
		description: '文章类型',
		schema: {
			type: 'string',
			example: 'cloud',
			enum: Object.keys(cloudTencentConstants),
			'x-apifox-enum': transformConstantsToOptions(cloudTencentConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(cloudTencentConstants), { message: validateMessage('type') })
	type: cloudTencentTypeKey
}

export class CloudTencentZoneParamDto {
	@ApiPropertyExtend({
		description: '技术专区类型',
		schema: {
			type: 'string',
			example: 'tencentcloudsmartadvisor',
			enum: Object.keys(cloudTencentZoneConstants),
			'x-apifox-enum': transformConstantsToOptions(cloudTencentZoneConstants)
		}
	})
	@IsEnum(transformConstantsObjectToEnum(cloudTencentZoneConstants), { message: validateMessage('type') })
	type: cloudTencentZoneTypeKey
}
