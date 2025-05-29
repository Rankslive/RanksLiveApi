import { IsEnum } from 'class-validator'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { YQqConstants } from './constants/y.qq.constants'
import { validateMessage } from '../../utils/validation.prompts'

export class YQqParamDto {
    @ApiPropertyEnumExtend('类型', YQqConstants, 'surge')
    @IsEnum(transformConstantsObjectToEnum(YQqConstants), { message: validateMessage('type') })
    type: keyof typeof YQqConstants
}
