import { ApiPropertyExtend } from './api.property.extend.decorator'
import { transformConstantsToOptions } from '../../utils/helper'

export const ApiPropertyEnumExtend = (description: string, enums: any, defaultValue: string) =>
    ApiPropertyExtend({
        description: description,
        enum: Object.keys(enums),
        schema: {
            type: 'string',
            enum: Object.keys(enums),
            example: defaultValue,
            'x-apifox-enum': transformConstantsToOptions(enums)
        }
    })
