import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { WeReadService } from '@/modules/weread/we.read.service'
import { WeReadConstants } from '@/modules/weread/constants/we.read.constants'
import { WeReadParamDto } from '@/modules/weread/we.read.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

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
