import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { SinaNewsService } from '@/modules/sina.news/sina.news.service'
import { SinaNewsParamDto } from '@/modules/sina.news/sina.news.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('sina.news')
@ApiTags('新浪新闻')
export class SinaNewsController {
    constructor(private readonly sinaNewsService: SinaNewsService) {}

    @Get('rank/:type')
    @ApiOperation({ summary: '获取新浪新闻热榜' })
    @ApiMaintainers('lonewolfyx')
    async getRank(@Param() param: SinaNewsParamDto) {
        const { type } = param
        return await this.sinaNewsService.getNewsRank(type)
    }
}
