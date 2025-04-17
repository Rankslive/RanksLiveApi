import { HttpStatus } from '@nestjs/common'

export class ResponseDto<T> {
	code: number

	data: T | string | Record<string, any>

	message: string

	timestamp: number

	constructor(data?: T, message: string = 'success') {
		this.code = HttpStatus.OK
		this.data = data || ''
		this.message = message

		this.timestamp = Date.now()
	}

	/**
	 * 设置状态
	 * @param code
	 */
	setCode(code: number) {
		this.code = code
		return this
	}

	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: T) {
		this.data = data
		return this
	}

	/**
	 * 设置消息
	 * @param message
	 */
	setMessage(message: string) {
		this.message = message
		return this
	}
}
