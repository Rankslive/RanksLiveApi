import { Injectable } from '@nestjs/common'
import { UserService } from '@/modules/user/user.service'
import { JwtService } from '@nestjs/jwt'
import { BusinessException } from '@/common/exception/business.exception'

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UserService,
		private readonly jwtService: JwtService
	) {}

	/**
	 * 验证用户
	 * @param username
	 * @param password
	 */
	async validateUser(username: string, password: string): Promise<any> {
		const user = await this.usersService.findOne(username)

		if (user.password != password) {
			return null
		}

		if (user && user.password === password) {
			const { password, ...result } = user
			return result
		}

		return null
	}

	login(user: any) {
		const payload = { username: user.username, sub: user.userId }
		return {
			access_token: this.jwtService.sign(payload)
		}
	}
}
