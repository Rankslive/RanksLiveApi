import { IsEnum } from 'class-validator'
import { JueJinType } from './types/juejin'
import { JuejinAuthorConstants, JuejinConstants } from './constants/juejin.constants'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { validateMessage } from '../../utils/validation.prompts'

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
