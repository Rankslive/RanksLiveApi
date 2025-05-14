import { BiliBiliRank } from '@/modules/bilibili/constants/bilibili.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { BiliBiliRankType } from './types/bilibili'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class BiliBiliRankParamDto {
    @ApiPropertyEnumExtend('榜单类型', BiliBiliRank, 'anime')
    @IsEnum(transformConstantsObjectToEnum(BiliBiliRank), { message: validateMessage('type') })
    type: BiliBiliRankType
}
