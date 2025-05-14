import { YQqConstants } from '@/modules/yqq/constants/y.qq.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class YQqParamDto {
    @ApiPropertyEnumExtend('类型', YQqConstants, 'surge')
    @IsEnum(transformConstantsObjectToEnum(YQqConstants), { message: validateMessage('type') })
    type: keyof typeof YQqConstants
}
