import { Controller, Get } from '@nestjs/common'
import { IfengNewsService } from './ifeng.news.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { ApiDescription } from '../../common/decorator/api.description.decorator'

@Controller('ifeng.news')
@ApiPlatform('凤凰新闻')
export class IfengNewsController {
    constructor(private readonly ifengNewsService: IfengNewsService) {
    }

    @Get('hot')
    @ApiDescription('获取凤凰新闻热榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.ifeng.com/')
    async getHotNews() {
        return await this.ifengNewsService.getHotNewsRank()
    }
}
