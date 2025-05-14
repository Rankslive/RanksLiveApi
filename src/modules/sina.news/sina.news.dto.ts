import { sinaNewsConstants } from '@/modules/sina.news/constants/sina.news.constants'
import { sinaNewsType } from './types/sina.news'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class SinaNewsParamDto {
    @ApiPropertyEnumExtend('榜单类型', sinaNewsConstants, 'all')
    @IsEnum(transformConstantsObjectToEnum(sinaNewsConstants), { message: validateMessage('type') })
    type: sinaNewsType = 'all'
}
