import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class ApiMetadataReader {
    constructor(private readonly reflector: Reflector) {}

    getMetadata(context: ExecutionContext) {
        const handler = context.getHandler()
        const controller = context.getClass()

        return (key: string) =>
            this.reflector.getAllAndOverride<string>(key, [
                handler,
                controller
            ])
    }
}
