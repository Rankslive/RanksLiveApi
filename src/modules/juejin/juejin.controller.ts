import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { JuejinService } from '@/modules/juejin/juejin.service'
import { JuejinConstants } from '@/modules/juejin/constants/juejin.constants'
import { JuejinArticleDto, JuejinAuthorDto } from '@/modules/juejin/juejin.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('juejin')
@ApiPlatform('稀土掘金')
export class JuejinController {
    constructor(private readonly JuejinService: JuejinService) {}

    @Get('article/:type')
    @ApiOperation({ summary: '获取掘金文章榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://juejin.cn/hot/articles')
    async getJuejinArticleRank(@Param() param: JuejinArticleDto) {
        const { type } = param
        return await this.JuejinService.getArticleRankList(JuejinConstants[type]['category_id'])
    }

    @Get('columns')
    @ApiOperation({ summary: '获取掘金精选专栏榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://juejin.cn/hot/columns')
    async getJuejinHotColumns() {
        return await this.JuejinService.getHotColumnsRankList()
    }

    @Get('collections')
    @ApiOperation({ summary: '获取掘金推荐收藏集' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://juejin.cn/hot/collections')
    async getJuejinHotCollections() {
        return await this.JuejinService.getHotCollectionsRankList()
    }

    @Get('authors/:type')
    @ApiOperation({ summary: '获取掘金优质作者榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://juejin.cn/hot/authors/6809637769959178254')
    async getJuejinAuthorBackEnd(@Param() param: JuejinAuthorDto) {
        const { type } = param
        return await this.JuejinService.getAuthorRankList(JuejinConstants[type].category_id)
    }

    @Get('article/collect/:type')
    @ApiOperation({ summary: '获取掘金文章收藏榜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://juejin.cn/hot/collected-articles')
    async getJuejinArticleCollectedRank(@Param() param: JuejinArticleDto) {
        const { type } = param
        return await this.JuejinService.getArticleRankList(JuejinConstants[type].category_id, 'collect')
    }
}
