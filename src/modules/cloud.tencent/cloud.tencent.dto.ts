import { IsEnum } from 'class-validator'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { cloudTencentConstants, cloudTencentZoneConstants } from './constants/cloud.tencent.constants'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { cloudTencentTypeKey, cloudTencentZoneTypeKey } from './types/cloud.tencent'
import { validateMessage } from '../../utils/validation.prompts'

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
