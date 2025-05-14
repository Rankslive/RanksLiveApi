import { JuejinAuthorConstants, JuejinConstants } from '@/modules/juejin/constants/juejin.constants'
import { IsEnum } from 'class-validator'
import { JueJinType } from './types/juejin'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class JuejinArticleDto {
    @ApiPropertyEnumExtend('榜单类型', JuejinConstants, 'all')
    @IsEnum(transformConstantsObjectToEnum(JuejinConstants), { message: validateMessage('type') })
    type: JueJinType
}

export class JuejinAuthorDto {
    @ApiPropertyEnumExtend('榜单类别', JuejinAuthorConstants, 'backend')
    @IsEnum(transformConstantsObjectToEnum(JuejinAuthorConstants), { message: validateMessage('type') })
    type: JueJinType
}
