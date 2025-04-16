import { HttpException, HttpStatus } from '@nestjs/common'
import { isArray } from 'radash'

/**
 * 业务异常
 *
 * e.g: throw new BusinessException([500, '服务器异常'])
 */
export class BusinessException extends HttpException {
	constructor(error: string | Record<string, any>) {
		if (isArray(error)) {
			const [
				code,
				message
			] = error as [number, string]
			super(message, code)
		} else {
			super(error, HttpStatus.OK)
		}
	}
}
