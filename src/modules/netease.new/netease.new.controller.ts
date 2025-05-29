import { Controller, Get } from '@nestjs/common'
import { NeteaseNewService } from './netease.new.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiDescription } from '../../common/decorator/api.description.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'

@Controller('netease.new')
@ApiPlatform('网易云新闻')
export class NeteaseNewController {
    constructor(private readonly neteaseNewService: NeteaseNewService) {}

    @Get('hot/search')
    @ApiDescription('获取网易云新闻 · 热搜榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.163.com/search')
    async getHotSearch() {
        return await this.neteaseNewService.getHotSearch()
    }

    @Get('hot/comment')
    @ApiDescription('获取网易云新闻 · 热议榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.163.com/search')
    async getHotCommentRank() {
        return await this.neteaseNewService.getHotCommentRank()
    }

    @Get('hot/repeat')
    @ApiDescription('获取网易云新闻 · 热闻榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.163.com/search')
    async getHotRepeat() {
        return await this.neteaseNewService.getHotRepeat()
    }

    @Get('dynamic/topic')
    @ApiDescription('获取网易云新闻 · 话题榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://m.163.com/search')
    async getTopicRank() {
        return await this.neteaseNewService.getTopicRank()
    }
}
