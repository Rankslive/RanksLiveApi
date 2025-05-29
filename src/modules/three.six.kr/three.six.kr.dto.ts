import { IsEnum } from 'class-validator'
import { ThreeSixKrConstants } from './constants/three.six.kr.constants'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { validateMessage } from '../../utils/validation.prompts'

export class ThreeSixKrParamDto {
    @ApiPropertyEnumExtend('榜单类型', ThreeSixKrConstants, 'hot')
    @IsEnum(transformConstantsObjectToEnum(ThreeSixKrConstants), { message: validateMessage('type') })
    type: keyof typeof ThreeSixKrConstants
}
