import { ApiOperation } from '@nestjs/swagger'
import { applyDecorators, SetMetadata } from '@nestjs/common'

export const API_DESCRIPTION_KEY = 'api_description'

/**
 * 接口描述
 * @param content
 * @constructor
 */
export const ApiDescription = (content: string) => {
    return applyDecorators(ApiOperation({ summary: content }), SetMetadata(API_DESCRIPTION_KEY, content))
}
