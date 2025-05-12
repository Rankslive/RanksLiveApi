import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { NeteaseService } from '@/modules/netease/netease.service'
import { NeteaseConstants } from '@/modules/netease/constants/netease.constants'
import { NeteaseParamDto } from '@/modules/netease/netease.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('netease')
@ApiTags('网易云音乐')
export class NeteaseController {
    constructor(private readonly NeteaseService: NeteaseService) {}

    @Get('rank/:type')
    @ApiOperation({ summary: '获取网易云音乐榜单' })
    @ApiMaintainers('lonewolfyx')
    async getSurgeRank(@Param() param: NeteaseParamDto) {
        const { type } = param
        return await this.NeteaseService.getRankList(NeteaseConstants[type]['id'])
    }
}
