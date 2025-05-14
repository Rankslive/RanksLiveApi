import { WeReadConstants } from '@/modules/weread/constants/we.read.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class WeReadParamDto {
    @ApiPropertyEnumExtend('榜单类型', WeReadConstants, 'surge')
    @IsEnum(transformConstantsObjectToEnum(WeReadConstants), { message: validateMessage('type') })
    type: keyof typeof WeReadConstants
}
