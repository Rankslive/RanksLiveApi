import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import { IS_PUBLIC_KEY, ROLES_KEY } from '@/modules/auth/auth.constants'

/**
 * RBAC 角色权限守卫
 */
@Injectable()
export class RbacGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		// 检测是否为 公开路由
		const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
			context.getHandler(),
			context.getClass()
		])

		// 公开路由直接开放
		if (isPublic) {
			return true
		}

		const request = context.switchToHttp().getRequest<Request>()

		const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass()
		])

		if (!requiredRoles) {
			return true
		}

		// TODO 角色权限的定义，由开发者自行决定
		return true
	}
}
