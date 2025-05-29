import { IsEnum } from 'class-validator'
import { NeteaseConstants } from './constants/netease.constants'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { validateMessage } from '../../utils/validation.prompts'

export class NeteaseParamDto {
    @ApiPropertyEnumExtend('榜单类型', NeteaseConstants, 'surge')
    @IsEnum(transformConstantsObjectToEnum(NeteaseConstants), { message: validateMessage('type') })
    type: keyof typeof NeteaseConstants
}
