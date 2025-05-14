import { ThreeSixKrConstants } from '@/modules/three.six.kr/constants/three.six.kr.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class ThreeSixKrParamDto {
    @ApiPropertyEnumExtend('榜单类型', ThreeSixKrConstants, 'hot')
    @IsEnum(transformConstantsObjectToEnum(ThreeSixKrConstants), { message: validateMessage('type') })
    type: keyof typeof ThreeSixKrConstants
}
