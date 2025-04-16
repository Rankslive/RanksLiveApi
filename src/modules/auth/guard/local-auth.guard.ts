import { BadRequestException, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { BusinessException } from '@/common/exception/business.exception'
import { CLIENT_DELETED_ERROR } from '@/constants/response.constants'
import { GUARD_LOCAL } from '@/modules/auth/auth.constants'

@Injectable()
export class LocalAuthGuard extends AuthGuard(GUARD_LOCAL) {
	constructor() {
		super()
	}

	/**
	 * 登录策略
	 * @param err
	 * @param user
	 * @param info
	 */
	handleRequest(err: any, user: any, info: any): any {
		if (info && info.message === 'Missing credentials') {
			throw new BadRequestException('参数错误')
		}

		// 如果没有 user 信息内容则直接抛出异常
		if (err || !user) {
			throw new BusinessException(CLIENT_DELETED_ERROR)
		}

		return user
	}
}
