import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Observable } from 'rxjs'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import { JsonWebTokenError, TokenExpiredError } from '@nestjs/jwt'
import { NotBeforeError } from 'jsonwebtoken'
import {
	CLIENT_HTTP_UNAUTHORIZED_EMPTY,
	CLIENT_HTTP_UNAUTHORIZED_ERROR,
	CLIENT_HTTP_UNAUTHORIZED_EXPIRED
} from '@/constants/response.constants'
import { GUARD_JWT, IS_PUBLIC_KEY } from '@/modules/auth/auth.constants'

@Injectable()
export class JwtAuthGuard extends AuthGuard(GUARD_JWT) {
	constructor(private reflector: Reflector) {
		super()
	}

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
		const token = this.extractTokenFromHeader(request)

		// 如果 token 不存在
		if (!token) {
			throw new UnauthorizedException(CLIENT_HTTP_UNAUTHORIZED_EMPTY)
		}

		return super.canActivate(context)
	}

	/**
	 * 从请求头中提取 token
	 * @param request
	 * @private
	 */
	private extractTokenFromHeader(request: Request): string {
		const [
			type,
			token
		] = request.headers.authorization?.split(' ') ?? []
		return type === 'Bearer' ? token : ''
	}

	/**
	 * 针对授权管道做的异常处理 AuthGuard-handleRequest(err: any, user: any, info: any, context: ExecutionContext, status?: any)
	 * @param err
	 * @param user
	 * @param info
	 */
	handleRequest(err: any, user: any, info: any): any {
		// 失效的 token
		if (info instanceof TokenExpiredError || info instanceof NotBeforeError) {
			throw new UnauthorizedException(CLIENT_HTTP_UNAUTHORIZED_EXPIRED)
		}

		// 无效的 token
		if (info instanceof JsonWebTokenError) {
			throw new UnauthorizedException(CLIENT_HTTP_UNAUTHORIZED_ERROR)
		}

		return user
	}
}
