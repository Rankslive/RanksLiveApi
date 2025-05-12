import { DoubanConstants } from '@/modules/douban/constants/douban.constants'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum, transformConstantsToOptions } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { ApiPropertyExtend } from '@/common/decorator/api.property.extend.decorator'

export class DouBanParamDto {
    @ApiPropertyExtend({
        description: '榜单类型',
        enum: Object.keys(DoubanConstants),
        schema: {
            type: 'string',
            enum: Object.keys(DoubanConstants),
            example: 'subject',
            'x-apifox-enum': transformConstantsToOptions(DoubanConstants)
        }
    })
    @IsEnum(transformConstantsObjectToEnum(DoubanConstants), { message: validateMessage('type') })
    type: keyof typeof DoubanConstants
}
