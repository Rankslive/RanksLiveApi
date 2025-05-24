import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { DouyinService } from '@/modules/douyin/douyin.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('douyin')
@ApiPlatform('抖音')
export class DouyinController {
    constructor(private readonly DouYinService: DouyinService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取抖音热榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.iesdouyin.com/share/billboard/')
    async getDouYinHot() {
        return await this.DouYinService.getHotRankList()
    }
}
