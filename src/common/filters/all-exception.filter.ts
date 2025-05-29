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
import { HttpException } from '@nestjs/common/exceptions/http.exception'
import { isArray } from 'radash'
import * as process from 'node:process'
import { ResponseDto } from '../dto/response.dto'
import { SERVER_INTERNAL_ERROR } from '../../constants/response.constants'

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

        // 开发环境则打印错误信息
        if (process.env.NODE_ENV === 'development') {
            console.log(exception)
        }
        const { code, message } = this.getErrorStructure(exception)

        response.status(HttpStatus.OK).json(new ResponseDto(message).setCode(code).setMessage('error'))
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
