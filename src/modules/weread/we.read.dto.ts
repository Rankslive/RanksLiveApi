import { IsEnum } from 'class-validator'
import { WeReadConstants } from './constants/we.read.constants'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { validateMessage } from '../../utils/validation.prompts'

export class WeReadParamDto {
    @ApiPropertyEnumExtend('榜单类型', WeReadConstants, 'surge')
    @IsEnum(transformConstantsObjectToEnum(WeReadConstants), { message: validateMessage('type') })
    type: keyof typeof WeReadConstants
}
