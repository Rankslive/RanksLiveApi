import { Controller, Get, Param } from '@nestjs/common'
import { NeteaseService } from './netease.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from 'src/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { ApiDescription } from '../../common/decorator/api.description.decorator'
import { NeteaseParamDto } from './netease.dto'
import { NeteaseConstants } from './constants/netease.constants'

@Controller('netease.music')
@ApiPlatform('网易云音乐')
export class NeteaseController {
    constructor(private readonly NeteaseService: NeteaseService) {
    }

    @Get('rank/:type')
    @ApiDescription('获取网易云音乐榜单')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://music.163.com/#/discover/toplist')
    async getSurgeRank(@Param() param: NeteaseParamDto) {
        const { type } = param
        return await this.NeteaseService.getRankList(NeteaseConstants[type]['id'])
    }
}
