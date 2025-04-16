import { SetMetadata } from '@nestjs/common'
import { IS_PUBLIC_KEY } from '@/modules/auth/auth.constants'

/**
 * 设置为公开路由
 * 装饰器使用：@Public()
 * @constructor
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)
