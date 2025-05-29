import { IsEnum } from 'class-validator'
import { DomainType, PeriodType, SortType } from './types/zhihu'
import { zhihuCreatorDomain, zhihuPeriod, zhihuSort } from './constants/zhihu.constants'
import { validateMessage } from '../../utils/validation.prompts'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'

export class ZhiHuPotentialQuestionDto {
    @ApiPropertyEnumExtend('榜单类型', zhihuCreatorDomain, 'all')
    @IsEnum(transformConstantsObjectToEnum(zhihuCreatorDomain), { message: validateMessage('domain') })
    domain: DomainType

    @ApiPropertyEnumExtend('排序类型', zhihuSort, 'all')
    @IsEnum(transformConstantsObjectToEnum(zhihuSort), { message: validateMessage('sortType') })
    sortType: SortType
}

export class ZhiHuHotQuestionDto {
    @ApiPropertyEnumExtend('榜单类型', zhihuCreatorDomain, 'all')
    @IsEnum(transformConstantsObjectToEnum(zhihuCreatorDomain), { message: validateMessage('domain') })
    domain: DomainType

    @ApiPropertyEnumExtend('榜单周期', zhihuPeriod, 'hour')
    @IsEnum(transformConstantsObjectToEnum(zhihuPeriod), { message: validateMessage('period') })
    period: PeriodType
}
