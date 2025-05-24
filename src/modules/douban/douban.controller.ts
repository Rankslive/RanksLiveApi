import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { DoubanService } from '@/modules/douban/douban.service'
import { DoubanConstants } from '@/modules/douban/constants/douban.constants'
import { DouBanParamDto } from '@/modules/douban/douban.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiDescription } from '@/common/decorator/api.description.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('douban')
@ApiPlatform('豆瓣')
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
    @ApiDescription('获取豆瓣 · 华语口碑剧集榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.douban.com/subject_collection/tv_chinese_best_weekly')
    async getTvChineseRank() {
        return await this.doubanService.getTvChineseRank()
    }

    @Get('weekly/movie')
    @ApiDescription('获取豆瓣 · 一周口碑电影榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.douban.com/subject_collection/movie_weekly_best')
    async getWeeklyMovie() {
        return await this.doubanService.getWeeklyMovie()
    }

    @Get('weekly/tv_global')
    @ApiDescription('获取豆瓣 · 全球口碑剧集榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.douban.com/subject_collection/tv_global_best_weekly')
    async getWeeklyTvGlobal() {
        return await this.doubanService.getTvGlobalRank()
    }

    @Get('weekly/show_chinese')
    @ApiDescription('获取豆瓣 · 国内口碑综艺榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.douban.com/subject_collection/show_chinese_best_weekly')
    async getWeeklyShowChinese() {
        return await this.doubanService.getShowChineseRank()
    }

    @Get('weekly/show_global')
    @ApiDescription('获取豆瓣 · 国外口碑综艺榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.douban.com/subject_collection/show_global_best_weekly')
    async getWeeklyShowGlobal() {
        return await this.doubanService.getShowGlobalRank()
    }
}
