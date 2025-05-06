import { ApiOperation } from '@nestjs/swagger'

/**
 * 接口描述
 * @param content
 * @constructor
 */
export const ApiDescription = (content: string) => ApiOperation({ summary: content })
