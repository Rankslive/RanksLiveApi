import { transformConstantsObjectToEnum } from '@/utils/helper'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'
import { ItHomeConstants, ItHomeListRank } from '@/modules/it.home/constants/it.home.constants'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

export class iTHomeParamDto {
    @ApiPropertyEnumExtend('榜单类型', ItHomeConstants, 'read')
    @IsEnum(transformConstantsObjectToEnum(ItHomeConstants), { message: validateMessage('rank') })
    rank: keyof typeof ItHomeConstants

    @ApiPropertyEnumExtend('榜单时间类型', ItHomeListRank, 'day')
    @IsEnum(transformConstantsObjectToEnum(ItHomeListRank), { message: validateMessage('type') })
    type: keyof typeof ItHomeListRank
}
