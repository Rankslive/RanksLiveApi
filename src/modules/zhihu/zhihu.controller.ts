import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ZhihuService } from './zhihu.service'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { zhihuConstants, zhihuCreatorDomain } from './constants/zhihu.constants'
import { ZhiHuHotQuestionDto, ZhiHuPotentialQuestionDto } from './zhihu.dto'

@Controller('zhihu')
@ApiPlatform('知乎')
export class ZhihuController {
    constructor(private readonly ZhihuService: ZhihuService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取知乎热榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.zhihu.com/hot')
    async getZhiHuHot() {
        return await this.ZhihuService.getHotRankList()
    }

    @Get('miss/hot')
    @ApiOperation({ summary: '获取知乎错过热议' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.zhihu.com/')
    async getZhiHuMissHot() {
        return await this.ZhihuService.getZhihuNextRenderList(zhihuConstants.billboard_missed)
    }

    @Get('weekly')
    @ApiOperation({ summary: '获取知乎每周必看' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.zhihu.com/')
    async getZhiHuWeekly() {
        return await this.ZhihuService.getZhihuNextRenderList(zhihuConstants.billboard_weekly)
    }

    @Get('hot/question/:domain/:period')
    @ApiOperation({ summary: '获取知乎近期热点' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.zhihu.com/creator/hot-question/hot/0/hour')
    async getZhiHuHotQuestion(@Param() params: ZhiHuHotQuestionDto) {
        const { domain, period } = params
        return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomain[domain]['value'], period)
    }

    @Get('potential/question/:domain/:sortType')
    @ApiOperation({ summary: '获取知乎潜力问题' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.zhihu.com/creator/potential-question/potential/0/all')
    async getZhiHuPotentialQuestion(@Param() params: ZhiHuPotentialQuestionDto) {
        const { domain, sortType } = params
        return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomain[domain]['value'], sortType)
    }

    @Get('daily')
    @ApiOperation({ summary: '获取知乎日报' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://daily.zhihu.com/')
    async getZhiHuDaily() {
        return await this.ZhihuService.getZhihuDailyRank()
    }
}
