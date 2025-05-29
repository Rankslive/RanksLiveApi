import { sinaNewsType } from './types/sina.news'
import { IsEnum } from 'class-validator'
import { sinaNewsConstants } from './constants/sina.news.constants'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { validateMessage } from '../../utils/validation.prompts'

export class SinaNewsParamDto {
    @ApiPropertyEnumExtend('榜单类型', sinaNewsConstants, 'all')
    @IsEnum(transformConstantsObjectToEnum(sinaNewsConstants), { message: validateMessage('type') })
    type: sinaNewsType = 'all'
}
