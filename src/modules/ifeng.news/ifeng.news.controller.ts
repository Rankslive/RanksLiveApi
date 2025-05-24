import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { IfengNewsService } from '@/modules/ifeng.news/ifeng.news.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('ifeng.news')
@ApiPlatform('凤凰新闻')
export class IfengNewsController {
    constructor(private readonly ifengNewsService: IfengNewsService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取凤凰新闻热榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.ifeng.com/')
    async getHotNews() {
        return await this.ifengNewsService.getHotNewsRank()
    }
}
