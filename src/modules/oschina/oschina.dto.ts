import { oschinaBlogArticleType, oschinaBlogRankSortType, OschinaGroupType } from './types/oschina'
import { IsEnum } from 'class-validator'
import { validateMessage } from '../../utils/validation.prompts'
import { oschinaBlogArticle, oschinaBlogRankSort, oschinaGroups } from './constants/oschina.constants'
import { ApiPropertyEnumExtend } from '../../common/decorator/api.property.enum.extend.decorator'
import { transformConstantsObjectToEnum } from '../../utils/helper'

export class OschinaGroupParamDto {
    @ApiPropertyEnumExtend('榜单类型', oschinaGroups, 'ascend')
    @IsEnum(transformConstantsObjectToEnum(oschinaGroups), { message: validateMessage('type') })
    type: OschinaGroupType
}

export class OschinaBlogParamDto {
    @ApiPropertyEnumExtend('博客文章类型', oschinaBlogArticle, 'aiLlm')
    @IsEnum(transformConstantsObjectToEnum(oschinaBlogArticle), { message: validateMessage('type') })
    type: oschinaBlogArticleType

    @ApiPropertyEnumExtend('博客文章排序方式', oschinaBlogRankSort, 'time')
    @IsEnum(transformConstantsObjectToEnum(oschinaBlogRankSort), { message: validateMessage('sort') })
    sort: oschinaBlogRankSortType
}
