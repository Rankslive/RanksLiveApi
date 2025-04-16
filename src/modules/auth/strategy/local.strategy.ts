import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { AuthService } from '@/modules/auth/auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly authService: AuthService) {
		super({
			usernameField: 'username'
		})
	}

	/**
	 * 登录校验策略
	 *
	 * username, password 来自于 passport 规则定义的
	 * 默认情况下，username 字段会被解析为 usernameField 的值，
	 * password 字段会被解析为 passwordField 的值，
	 * 如果没有设置 passwordField，则默认为 password。
	 *
	 * @param username
	 * @param password
	 */
	async validate(username: string, password: string): Promise<any> {
		return await this.authService.validateUser(username, password)
	}
}
