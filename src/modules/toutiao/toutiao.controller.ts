import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ToutiaoService } from '@/modules/toutiao/toutiao.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'

@Controller('toutiao')
@ApiTags('今日头条')
export class ToutiaoController {
    constructor(private readonly ToutiaoService: ToutiaoService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取今天头条热榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.toutiao.com/')
    async getToutiaoHot() {
        return await this.ToutiaoService.getHotRankList()
    }
}
