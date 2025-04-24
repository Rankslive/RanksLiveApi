import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { JuejinService } from '@/modules/juejin/juejin.service'
import { JuejinConstants } from '@/constants/juejin.constants'
import { JuejinArticleDto, JuejinAuthorDto } from '@/modules/juejin/juejin.dto'

@Controller('juejin')
@ApiTags('稀土掘金')
export class JuejinController {
	constructor(private readonly JuejinService: JuejinService) {}

	@Get('article/:type')
	@ApiOperation({ summary: '获取掘金文章榜' })
	async getJuejinArticleRank(@Param() param: JuejinArticleDto) {
		const { type } = param
		return await this.JuejinService.getArticleRankList(JuejinConstants[type]['category_id'])
	}

	@Get('columns')
	@ApiOperation({ summary: '获取掘金精选专栏榜' })
	async getJuejinHotColumns() {
		return await this.JuejinService.getHotColumnsRankList()
	}

	@Get('collections')
	@ApiOperation({ summary: '获取掘金推荐收藏集' })
	async getJuejinHotCollections() {
		return await this.JuejinService.getHotCollectionsRankList()
	}

	@Get('authors/:type')
	@ApiOperation({ summary: '获取掘金优质作者榜' })
	async getJuejinAuthorBackEnd(@Param() param: JuejinAuthorDto) {
		const { type } = param
		return await this.JuejinService.getAuthorRankList(JuejinConstants[type].category_id)
	}

	@Get('article/collect/:type')
	@ApiOperation({ summary: '获取掘金文章收藏榜' })
	async getJuejinArticleCollectedRank(@Param() param: JuejinArticleDto) {
		const { type } = param
		return await this.JuejinService.getArticleRankList(JuejinConstants[type].category_id, 'collect')
	}
}
