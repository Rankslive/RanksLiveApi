import { DoubanConstants } from '@/modules/douban/constants/douban.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class DouBanParamDto {
    @ApiPropertyEnumExtend('榜单类型', DoubanConstants, 'subject')
    @IsEnum(transformConstantsObjectToEnum(DoubanConstants), { message: validateMessage('type') })
    type: keyof typeof DoubanConstants
}
