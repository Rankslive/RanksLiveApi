import { NeteaseConstants } from '@/modules/netease/constants/netease.constants'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class NeteaseParamDto {
    @ApiPropertyEnumExtend('榜单类型', NeteaseConstants, 'surge')
    @IsEnum(transformConstantsObjectToEnum(NeteaseConstants), { message: validateMessage('type') })
    type: keyof typeof NeteaseConstants
}
