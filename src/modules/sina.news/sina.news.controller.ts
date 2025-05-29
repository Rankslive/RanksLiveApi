import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { SinaNewsService } from './sina.news.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { SinaNewsParamDto } from './sina.news.dto'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'

@Controller('sina.news')
@ApiPlatform('新浪新闻')
export class SinaNewsController {
    constructor(private readonly sinaNewsService: SinaNewsService) {}

    @Get('rank/:type')
    @ApiOperation({ summary: '获取新浪新闻热榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://news.sina.cn/')
    async getRank(@Param() param: SinaNewsParamDto) {
        const { type } = param
        return await this.sinaNewsService.getNewsRank(type)
    }
}
