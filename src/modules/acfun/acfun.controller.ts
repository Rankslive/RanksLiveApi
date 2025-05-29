import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { AcfunService } from './acfun.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { AcfunParamDto } from './acfun.dto'
import { AcfunConstants } from './constants/acfun.constants'

@Controller('acfun')
@ApiPlatform('AcFun弹幕视频网')
export class AcfunController {
    constructor(private readonly AcfunService: AcfunService) {}

    @Get('rank/:type')
    @ApiOperation({ summary: '获取 Acfun 排行榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.acfun.cn/rank/list/?cid=-1&pcid=-1&range=DAY')
    async getAllRank(@Param() param: AcfunParamDto) {
        const { type } = param
        return await this.AcfunService.getRankList(AcfunConstants[type])
    }
}
