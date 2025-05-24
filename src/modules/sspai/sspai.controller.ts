import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { SspaiService } from '@/modules/sspai/sspai.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('sspai')
@ApiPlatform('少数派')
export class SspaiController {
    constructor(private readonly sspaiService: SspaiService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取少数派 · 最热资讯' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://sspai.com/')
    async getHotRank() {
        return await this.sspaiService.getHotRank()
    }
}
