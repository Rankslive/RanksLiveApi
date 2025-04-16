import { SetMetadata } from '@nestjs/common'
import { ROLES_KEY } from '@/modules/auth/auth.constants'

/**
 * 设置角色
 *
 * 装饰器使用：@Roles('admin', 'user')
 *
 * @param args
 * @constructor
 */
export const Roles = (...args: string[]) => SetMetadata(ROLES_KEY, args)
