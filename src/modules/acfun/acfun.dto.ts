import { AcfunChanelType } from './types/acfun'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { AcfunConstants } from '@/modules/acfun/constants/acfun.constants'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class AcfunParamDto {
    @ApiPropertyEnumExtend('榜单类型', AcfunConstants, 'all')
    @IsEnum(transformConstantsObjectToEnum(AcfunConstants), { message: validateMessage('type') })
    type: AcfunChanelType
}
