import { Controller, Get } from '@nestjs/common'
import { MsnService } from './msn.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiDescription } from '../../common/decorator/api.description.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'

@Controller('msn')
@ApiPlatform('msn')
export class MsnController {
    constructor(private readonly msnService: MsnService) {}

    @Get('hot')
    @ApiDescription('获取 MSN 热门榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.msn.cn')
    async getMsnRankList() {
        return await this.msnService.getMsnRankList()
    }
}
