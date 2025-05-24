import { ApiExtension } from '@nestjs/swagger'
import { applyDecorators, SetMetadata } from '@nestjs/common'

export const SOURCE_URL_KEY = 'source_url'

/**
 * 设置数据源网址
 * @param url
 * @constructor
 */
export const SourceUrl = (url: string) => {
    return applyDecorators(ApiExtension('x-source-url', url), SetMetadata(SOURCE_URL_KEY, url))
}
