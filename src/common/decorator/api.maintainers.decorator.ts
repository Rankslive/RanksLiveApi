import { ApiExtension } from '@nestjs/swagger'
import { isArray } from 'radash'

/**
 * 添加维护者修饰器
 * @param authors github 上的维护者用户名，即：https://github.com/{owner}
 * @constructor
 */
export const ApiMaintainers = (authors: string | string[]) => ApiExtension('x-maintainers', !isArray(authors) ? [authors] : authors)

// export const ApiMaintainers = (authors: string | string[]) => ApiExtension('x-maintainers', {
//     authors,
//     url: `https://github.com/${authors}`,
//     avatar: `https://avatars.githubusercontent.com/${authors}`
// })
