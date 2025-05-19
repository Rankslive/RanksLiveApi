import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { DoubanService } from '@/modules/douban/douban.service'
import { DoubanConstants } from '@/modules/douban/constants/douban.constants'
import { DouBanParamDto } from '@/modules/douban/douban.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiDescription } from '@/common/decorator/api.description.decorator'

@Controller('douban')
@ApiTags('豆瓣')
export class DoubanController {
    constructor(private readonly doubanService: DoubanService) {}

    @Get('real/:type')
    @ApiOperation({ summary: '获取豆瓣榜单 · 书影音、电影、电视榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.douban.com/subject_collection/subject_real_time_hotest')
    async getSubjectRank(@Param() param: DouBanParamDto): Promise<any> {
        const { type } = param
        return await this.doubanService.getRealRankList(DoubanConstants[type]['value'])
    }

    @Get('tv_chinese')
    @ApiDescription('获取豆瓣华语口碑剧集榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.douban.com/subject_collection/tv_chinese_best_weekly')
    async getTvChineseRank() {
        return await this.doubanService.getTvChineseRank()
    }

    @Get('weekly/movie')
    @ApiDescription('获取豆瓣一周口碑电影榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.douban.com/subject_collection/movie_weekly_best')
    async getWeeklyMovie() {
        return await this.doubanService.getWeeklyMovie()
    }
}
