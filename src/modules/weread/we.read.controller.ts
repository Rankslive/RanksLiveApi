import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { WeReadService } from '@/modules/weread/we.read.service'
import { WeReadConstants } from '@/modules/weread/constants/we.read.constants'
import { WeReadParamDto } from '@/modules/weread/we.read.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('we.read')
@ApiTags('微信读书')
export class WeReadController {
    constructor(private readonly WeReadService: WeReadService) {}

    @Get(':type')
    @ApiOperation({ summary: '获取微信读书榜单' })
    @ApiMaintainers('lonewolfyx')
    async getSurge(@Param() param: WeReadParamDto) {
        const { type } = param
        return await this.WeReadService.getRankList(WeReadConstants[type]['value'])
    }
}
