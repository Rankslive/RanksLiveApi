import { HttpStatus } from '@nestjs/common'

export class ResponseDto<T> {
	code: number

	data: T | string | Record<string, any>

	message: string

	request_id: string

	timestamp: number

	constructor(data?: T, requestId?: string, message: string = 'success') {
		this.code = HttpStatus.OK
		this.data = data || ''
		this.message = message
		this.request_id = requestId || ''

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

	/**
	 * 设置请求id
	 * @param requestId
	 */
	setRequestId(requestId: string) {
		this.request_id = requestId
		return this
	}
}
