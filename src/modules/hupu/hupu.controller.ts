import { Controller, Get, Query } from '@nestjs/common'
import { HupuService } from './hupu.service'
import { ApiOperation } from '@nestjs/swagger'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'

@Controller('hupu')
@ApiPlatform('虎扑')
export class HupuController {
    constructor(private readonly hupuService: HupuService) {}

    @Get('hot')
    @ApiOperation({ summary: '虎扑热榜' })
    @ApiMaintainers('ffgenius')
    @SourceUrl('https://www.hupu.com/')
    async getHupuHot(@Query('type') type: 'basketball' | 'football' | 'street') {
        return this.hupuService.getHupuHot(type)
    }
}
