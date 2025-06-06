import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common'
import { map, Observable } from 'rxjs'
import { Request, Response } from 'express'
import { ApiMetadataReader } from '../meta.data/api.meta.data.reader'
import { METHODS } from '../../constants/base.constants'
import { API_PLATFORM_KEY } from '../decorator/api.platform.decorator'
import { API_DESCRIPTION_KEY } from '../decorator/api.description.decorator'
import { SOURCE_URL_KEY } from '../decorator/source.url.decorator'
import { ResponseDto } from '../dto/response.dto'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    constructor(private readonly metaDataReader: ApiMetadataReader) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest() as Request

        const response = context.switchToHttp().getResponse() as Response

        // 由于 nestjs 默认返回 201 状态码，这里改为 200
        if (request.method === METHODS.POST && response.statusCode === HttpStatus.CREATED) {
            response.status(HttpStatus.OK)
        }

        const metaData = this.metaDataReader.getMetadata(context)

        const title = metaData(API_PLATFORM_KEY)
        const description = metaData(API_DESCRIPTION_KEY)
        const sourceUrl = metaData(SOURCE_URL_KEY)

        return next.handle().pipe(
            map((data) => {
                return new ResponseDto({
                    website: {
                        title: title,
                        description: description,
                        url: sourceUrl
                    },
                    items: data
                })
            })
        )
    }
}
