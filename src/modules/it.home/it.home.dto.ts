import { IsEnum } from 'class-validator'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'
import { ItHomeConstants, ItHomeListRank } from './constants/it.home.constants'
import { validateMessage } from '../../utils/validation.prompts'

export class iTHomeParamDto {
    @ApiPropertyEnumExtend('榜单类型', ItHomeConstants, 'read')
    @IsEnum(transformConstantsObjectToEnum(ItHomeConstants), { message: validateMessage('rank') })
    rank: keyof typeof ItHomeConstants

    @ApiPropertyEnumExtend('榜单时间类型', ItHomeListRank, 'day')
    @IsEnum(transformConstantsObjectToEnum(ItHomeListRank), { message: validateMessage('type') })
    type: keyof typeof ItHomeListRank
}
