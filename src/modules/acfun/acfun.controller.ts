import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AcfunService } from '@/modules/acfun/acfun.service'
import { AcfunConstants } from '@/modules/acfun/constants/acfun.constants'
import { AcfunParamDto } from '@/modules/acfun/acfun.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'

@Controller('acfun')
@ApiTags('AcFun弹幕视频网')
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
