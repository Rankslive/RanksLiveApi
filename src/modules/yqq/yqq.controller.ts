import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { YqqService } from '@/modules/yqq/yqq.service'
import { YQqConstants } from '@/modules/yqq/constants/y.qq.constants'
import { YQqParamDto } from '@/modules/yqq/yqq.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'

@Controller('yqq')
@ApiTags('QQ 音乐')
export class YqqController {
    constructor(private readonly YqqService: YqqService) {}

    @Get('musicTopList')
    @ApiOperation({ summary: '获取 QQ 音乐榜单列表' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://y.qq.com/n/ryqq/toplist/4')
    async getMusicTopList() {
        return await this.YqqService.getMusicTopList()
    }

    @Get('rank/:type')
    @ApiOperation({ summary: '获取 QQ 音乐排行榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://y.qq.com/n/ryqq/toplist/4')
    async getSurgeRank(@Param() param: YQqParamDto) {
        const { type } = param
        return await this.YqqService.getRanksList(YQqConstants[type]['value'])
    }
}
