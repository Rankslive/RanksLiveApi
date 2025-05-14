import { oschinaBlogArticleType, oschinaBlogRankSortType, OschinaGroupType } from './types/oschina'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { oschinaBlogArticle, oschinaBlogRankSort, oschinaGroups } from '@/modules/oschina/constants/oschina.constants'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class OschinaGroupParamDto {
    @ApiPropertyExtend({
        description: '榜单类型',
        enum: Object.keys(oschinaGroups),
        schema: {
            type: 'string',
            enum: Object.keys(oschinaGroups),
            example: 'ascend',
            'x-apifox-enum': transformConstantsToOptions(oschinaGroups)
        }
    })
    @IsEnum(transformConstantsObjectToEnum(oschinaGroups), { message: validateMessage('type') })
    type: OschinaGroupType
}

export class OschinaBlogParamDto {
    @ApiPropertyExtend({
        description: '博客文章类型',
        enum: Object.keys(oschinaBlogArticle),
        schema: {
            type: 'string',
            enum: Object.keys(oschinaBlogArticle),
            example: 'aiLlm',
            'x-apifox-enum': transformConstantsToOptions(oschinaBlogArticle)
        }
    })
    @IsEnum(transformConstantsObjectToEnum(oschinaBlogArticle), { message: validateMessage('type') })
    type: oschinaBlogArticleType

    @ApiPropertyExtend({
        description: '博客文章排序方式',
        enum: Object.keys(oschinaBlogRankSort),
        schema: {
            type: 'string',
            enum: Object.keys(oschinaBlogRankSort),
            example: 'time',
            'x-apifox-enum': transformConstantsToOptions(oschinaBlogRankSort)
        }
    })
    @IsEnum(transformConstantsObjectToEnum(oschinaBlogRankSort), { message: validateMessage('sort') })
    sort: oschinaBlogRankSortType
}
