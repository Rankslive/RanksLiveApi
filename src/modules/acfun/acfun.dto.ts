import { AcfunConstants } from './constants/acfun.constants'
import { AcfunChanelType } from './types/acfun'
import { IsEnum } from 'class-validator'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { validateMessage } from '../../utils/validation.prompts'

export class AcfunParamDto {
    @ApiPropertyEnumExtend('榜单类型', AcfunConstants, 'all')
    @IsEnum(transformConstantsObjectToEnum(AcfunConstants), { message: validateMessage('type') })
    type: AcfunChanelType
}
