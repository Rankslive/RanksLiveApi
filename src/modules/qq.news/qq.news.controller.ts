import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { QqNewsService } from './qq.news.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'

@Controller('qq.news')
@ApiPlatform('腾讯新闻')
export class QqNewsController {
    constructor(private readonly qqNewsService: QqNewsService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取腾讯 · 新闻热点榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://news.qq.com/')
    async getRankHot() {
        return await this.qqNewsService.getRankHot()
    }
}
