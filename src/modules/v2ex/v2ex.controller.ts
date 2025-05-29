import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { V2exService } from './v2ex.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'

@Controller('v2ex')
@ApiPlatform('v2ex')
export class V2exController {
    constructor(private readonly v2exService: V2exService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取 v2ex 热议榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.v2ex.com/')
    async getRankHot() {
        return await this.v2exService.getRankHot()
    }
}
