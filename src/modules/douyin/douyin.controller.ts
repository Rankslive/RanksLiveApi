import { Controller, Get } from '@nestjs/common'
import { DouyinService } from './douyin.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { ApiDescription } from '../../common/decorator/api.description.decorator'

@Controller('douyin')
@ApiPlatform('抖音')
export class DouyinController {
    constructor(private readonly DouYinService: DouyinService) {
    }

    @Get('hot')
    @ApiDescription('获取抖音热榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.iesdouyin.com/share/billboard/')
    async getDouYinHot() {
        return await this.DouYinService.getHotRankList()
    }
}
