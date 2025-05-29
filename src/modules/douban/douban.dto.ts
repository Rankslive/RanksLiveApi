import { IsEnum } from 'class-validator'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { DoubanConstants } from './constants/douban.constants'
import { validateMessage } from '../../utils/validation.prompts'

export class DouBanParamDto {
    @ApiPropertyEnumExtend('榜单类型', DoubanConstants, 'subject')
    @IsEnum(transformConstantsObjectToEnum(DoubanConstants), { message: validateMessage('type') })
    type: keyof typeof DoubanConstants
}
