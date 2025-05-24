import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ThePaperService } from '@/modules/the.paper/the.paper.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('the.paper')
@ApiPlatform('澎湃新闻')
export class ThePaperController {
    constructor(private readonly thePaperService: ThePaperService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取澎湃新闻 · 热榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.thepaper.cn/')
    async getRankHot() {
        return await this.thePaperService.getRankHot()
    }
}
