import { IsEnum } from 'class-validator'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { BiliBiliRankType } from './types/bilibili'
import { BiliBiliRank } from './constants/bilibili.constants'
import { validateMessage } from '../../utils/validation.prompts'

export class BiliBiliRankParamDto {
    @ApiPropertyEnumExtend('榜单类型', BiliBiliRank, 'anime')
    @IsEnum(transformConstantsObjectToEnum(BiliBiliRank), { message: validateMessage('type') })
    type: BiliBiliRankType
}
