import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { IfengNewsService } from '@/modules/ifeng.news/ifeng.news.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('ifeng.news')
@ApiTags('凤凰新闻')
export class IfengNewsController {
    constructor(private readonly ifengNewsService: IfengNewsService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取凤凰新闻热榜' })
    @ApiMaintainers('lonewolfyx')
    async getHotNews() {
        return await this.ifengNewsService.getHotNewsRank()
    }
}
