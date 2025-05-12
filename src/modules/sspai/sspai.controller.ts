import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { SspaiService } from '@/modules/sspai/sspai.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('sspai')
@ApiTags('少数派')
export class SspaiController {
    constructor(private readonly sspaiService: SspaiService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取少数派 · 最热资讯' })
    @ApiMaintainers('lonewolfyx')
    async getHotRank() {
        return await this.sspaiService.getHotRank()
    }
}
