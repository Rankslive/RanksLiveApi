import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { BilibiliService } from '@/modules/bilibili/bilibili.service'
import { BiliBiliRank, useBaseRank, useSeasonRank } from '@/modules/bilibili/constants/bilibili.constants'
import { BiliBiliRankParamDto } from '@/modules/bilibili/bilibili.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'

@Controller('bilibili')
@ApiTags('哔哩哔哩')
export class BilibiliController {
    constructor(private readonly BiliBiliService: BilibiliService) {}

    @Get('comprehensive/hot')
    @ApiOperation({ summary: '获取哔哩哔哩 · 综合热门榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.bilibili.com/v/popular/all')
    async getHot() {
        return await this.BiliBiliService.getComprehensiveHotRankList()
    }

    @Get('must/brush')
    @ApiOperation({ summary: '获取哔哩哔哩 · 入站必刷榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.bilibili.com/v/popular/history')
    async getMustBrushList() {
        return await this.BiliBiliService.getPopularPreciousRankList()
    }

    @Get('rank/:type')
    @ApiOperation({ summary: '获取哔哩哔哩排行榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.bilibili.com/v/popular/rank/all')
    async getAnimeRank(@Param() param: BiliBiliRankParamDto) {
        const { type } = param
        const rankType = BiliBiliRank[type]['value']

        const useBaseRankSet = new Set(useBaseRank)
        const useSeasonRankSet = new Set(useSeasonRank)

        // 策略模式映射处理函数
        const strategy = {
            base: () => this.BiliBiliService.getWebRankList(rankType),
            season: () => this.BiliBiliService.getSeasonRankList(rankType),
            default: () => this.BiliBiliService.getRankListV2(rankType)
        }

        const strategyType = useBaseRankSet.has(type) ? 'base' : useSeasonRankSet.has(type) ? 'season' : 'default'

        return await strategy[strategyType]()
    }
}
