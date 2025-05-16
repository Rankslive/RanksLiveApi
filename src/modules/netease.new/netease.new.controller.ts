import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { NeteaseNewService } from '@/modules/netease.new/netease.new.service'
import { ApiDescription } from '@/common/decorator/api.description.decorator'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'

@Controller('netease.new')
@ApiTags('网易云新闻')
export class NeteaseNewController {
    constructor(
        private readonly neteaseNewService: NeteaseNewService
    ) {
    }

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
