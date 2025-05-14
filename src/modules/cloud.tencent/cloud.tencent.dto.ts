import { cloudTencentTypeKey, cloudTencentZoneTypeKey } from '@/modules/cloud.tencent/types/cloud.tencent'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import {
    cloudTencentConstants,
    cloudTencentZoneConstants
} from '@/modules/cloud.tencent/constants/cloud.tencent.constants'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class CloudTencentParamDto {
    @ApiPropertyEnumExtend('文章类型', cloudTencentConstants, 'cloud')
    @IsEnum(transformConstantsObjectToEnum(cloudTencentConstants), { message: validateMessage('type') })
    type: cloudTencentTypeKey
}

export class CloudTencentZoneParamDto {
    @ApiPropertyEnumExtend('技术专区类型', cloudTencentZoneConstants, 'tencentcloudsmartadvisor')
    @IsEnum(transformConstantsObjectToEnum(cloudTencentZoneConstants), { message: validateMessage('type') })
    type: cloudTencentZoneTypeKey
}
