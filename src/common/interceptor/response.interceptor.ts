import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common'
import { map, Observable } from 'rxjs'
import { ResponseDto } from '@/common/dto/response.dto'
import { Request, Response } from 'express'
import { METHODS } from '@/constants/base.constants'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const request = context.switchToHttp().getRequest() as Request

		const response = context.switchToHttp().getResponse() as Response

		// 由于 nestjs 默认返回 201 状态码，这里改为 200
		if (request.method === METHODS.POST && response.statusCode === HttpStatus.CREATED) {
			response.status(HttpStatus.OK)
		}

		return next.handle().pipe(map((data) => new ResponseDto(data || [], request.requestId)))
	}
}
