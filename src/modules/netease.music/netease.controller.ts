import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { NeteaseService } from '@/modules/netease.music/netease.service'
import { NeteaseConstants } from '@/modules/netease.music/constants/netease.constants'
import { NeteaseParamDto } from '@/modules/netease.music/netease.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('netease.music')
@ApiPlatform('网易云音乐')
export class NeteaseController {
    constructor(private readonly NeteaseService: NeteaseService) {}

    @Get('rank/:type')
    @ApiOperation({ summary: '获取网易云音乐榜单' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://music.163.com/#/discover/toplist')
    async getSurgeRank(@Param() param: NeteaseParamDto) {
        const { type } = param
        return await this.NeteaseService.getRankList(NeteaseConstants[type]['id'])
    }
}
