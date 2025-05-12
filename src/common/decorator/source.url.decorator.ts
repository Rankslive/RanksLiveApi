import { ApiExtension } from '@nestjs/swagger'

/**
 * 设置数据源网址
 * @param url
 * @constructor
 */
export const SourceUrl = (url: string) => ApiExtension('x-source-url', url)
