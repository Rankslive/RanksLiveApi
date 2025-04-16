import {
	ArgumentsHost,
	BadRequestException,
	Catch,
	ExceptionFilter,
	HttpStatus,
	UnauthorizedException
} from '@nestjs/common'
import { HttpArgumentsHost } from '@nestjs/common/interfaces'
import { Request, Response } from 'express'
import { ResponseDto } from '@/common/dto/response.dto'
import { HttpException } from '@nestjs/common/exceptions/http.exception'
import { isArray } from 'radash'
import { SERVER_INTERNAL_ERROR } from '@/constants/response.constants'

interface ErrorResponse {
	message: number | number[] | string | string[]
	error: string
	statusCode: number
}

interface ErrorStructure {
	code: number
	message: string
}

/**
 * 全局异常过滤器
 */
@Catch()
export class AllExceptionFilter<T> implements ExceptionFilter {
	catch(exception: T, host: ArgumentsHost) {
		const ctx = host.switchToHttp() as HttpArgumentsHost
		const response: Response = ctx.getResponse<Response>()
		const request: Request = ctx.getRequest<Request>()

		const { code, message } = this.getErrorStructure(exception)

		response
			.status(HttpStatus.OK)
			.json(new ResponseDto(message).setCode(code).setRequestId(request.requestId).setMessage('error'))
	}

	/**
	 * 获取错误信息
	 * @param exception
	 * @private
	 */
	private getErrorStructure(exception: T): ErrorStructure {
		// 参数请求错误
		if (exception instanceof BadRequestException) {
			const response = exception.getResponse() as ErrorResponse
			const message = (isArray(response.message) ? response.message?.[0] : response.message) as string

			return {
				code: response.statusCode,
				message
			}
		}

		// token 授权异常
		if (exception instanceof UnauthorizedException) {
			const message = (exception.getResponse() as ErrorResponse).message
			return {
				code: message[0],
				message: message[1]
			}
		}

		if (exception instanceof HttpException) {
			return {
				code: exception.getStatus(),
				message: exception.message
			}
		}

		return {
			code: HttpStatus.INTERNAL_SERVER_ERROR,
			message: SERVER_INTERNAL_ERROR
		}
	}
}
