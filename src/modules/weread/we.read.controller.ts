import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { WeReadService } from './we.read.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { WeReadParamDto } from './we.read.dto'
import { WeReadConstants } from './constants/we.read.constants'

@Controller('we.read')
@ApiPlatform('微信读书')
export class WeReadController {
    constructor(private readonly WeReadService: WeReadService) {}

    @Get(':type')
    @ApiOperation({ summary: '获取微信读书榜单' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://weread.qq.com/web/category/rising')
    async getSurge(@Param() param: WeReadParamDto) {
        const { type } = param
        return await this.WeReadService.getRankList(WeReadConstants[type]['value'])
    }
}
