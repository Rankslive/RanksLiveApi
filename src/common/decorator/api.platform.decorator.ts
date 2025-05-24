import { applyDecorators, SetMetadata } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

export const API_PLATFORM_KEY = 'api.platform'
export const ApiPlatform = (platform: string) => {
    return applyDecorators(ApiTags(platform), SetMetadata(API_PLATFORM_KEY, platform))
}
