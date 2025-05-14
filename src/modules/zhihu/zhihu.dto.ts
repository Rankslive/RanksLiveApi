import { zhihuCreatorDomain, zhihuPeriod, zhihuSort } from '@/modules/zhihu/constants/zhihu.constants'
import { IsEnum } from 'class-validator'
import { validateMessage } from '@/utils/validation.prompts'
import { DomainType, PeriodType, SortType } from './types/zhihu'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'

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
