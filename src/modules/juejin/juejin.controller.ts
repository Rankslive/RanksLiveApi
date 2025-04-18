import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { JuejinService } from '@/modules/juejin/juejin.service'
import { JuejinConstants } from '@/constants/juejin.constants'

@Controller('juejin')
@ApiTags('稀土掘金')
export class JuejinController {
	constructor(private readonly JuejinService: JuejinService) {}

	@Get('article/comprehensive')
	@ApiOperation({ summary: '获取掘金文章榜 · 综合类' })
	async getJuejinArticleRank() {
		return this.JuejinService.getArticleRankList(JuejinConstants.all.category_id)
	}

	@Get('article/backend')
	@ApiOperation({ summary: '获取掘金文章榜 · 后端' })
	async getJuejinArticleBackEnd() {
		return this.JuejinService.getArticleRankList(JuejinConstants.backend.category_id)
	}

	@Get('article/frontend')
	@ApiOperation({ summary: '获取掘金文章榜 · 前端' })
	async getJuejinArticleFrontEnd() {
		return this.JuejinService.getArticleRankList(JuejinConstants.frontend.category_id)
	}

	@Get('article/android')
	@ApiOperation({ summary: '获取掘金文章榜 · Android' })
	async getJuejinArticleAndroid() {
		return this.JuejinService.getArticleRankList(JuejinConstants.android.category_id)
	}

	@Get('article/ios')
	@ApiOperation({ summary: '获取掘金文章榜 · iOS' })
	async getJuejinArticleIos() {
		return this.JuejinService.getArticleRankList(JuejinConstants.ios.category_id)
	}

	@Get('article/ai')
	@ApiOperation({ summary: '获取掘金文章榜 · 人工智能' })
	async getJuejinArticleAi() {
		return this.JuejinService.getArticleRankList(JuejinConstants.ai.category_id)
	}

	@Get('article/freebie')
	@ApiOperation({ summary: '获取掘金文章榜 · 开发工具' })
	async getJuejinArticleFreebie() {
		return this.JuejinService.getArticleRankList(JuejinConstants.freebie.category_id)
	}

	@Get('article/career')
	@ApiOperation({ summary: '获取掘金文章榜 · 代码人生' })
	async getJuejinArticleCareer() {
		return this.JuejinService.getArticleRankList(JuejinConstants.career.category_id)
	}

	@Get('article/read')
	@ApiOperation({ summary: '获取掘金文章榜 · 阅读' })
	async getJuejinArticleRead() {
		return this.JuejinService.getArticleRankList(JuejinConstants.article.category_id)
	}

	@Get('columns')
	@ApiOperation({ summary: '获取掘金精选专栏榜' })
	async getJuejinHotColumns() {
		return this.JuejinService.getHotColumnsRankList()
	}

	@Get('collections')
	@ApiOperation({ summary: '获取掘金推荐收藏集' })
	async getJuejinHotCollections() {
		return this.JuejinService.getHotCollectionsRankList()
	}

	@Get('authors/backend')
	@ApiOperation({ summary: '获取掘金优质作者榜 · 后端' })
	async getJuejinAuthorBackEnd() {
		return this.JuejinService.getAuthorRankList(JuejinConstants.backend.category_id)
	}

	@Get('authors/frontend')
	@ApiOperation({ summary: '获取掘金优质作者榜 · 前端' })
	async getJuejinAuthorFrontEnd() {
		return this.JuejinService.getAuthorRankList(JuejinConstants.frontend.category_id)
	}

	@Get('authors/client')
	@ApiOperation({ summary: '获取掘金优质作者榜 · 客户端' })
	async getJuejinAuthorClient() {
		return this.JuejinService.getAuthorRankList(JuejinConstants.android.category_id)
	}

	@Get('authors/ai')
	@ApiOperation({ summary: '获取掘金优质作者榜 · 人工智能' })
	async getJuejinAuthorAi() {
		return this.JuejinService.getAuthorRankList(JuejinConstants.ai.category_id)
	}

	@Get('authors/development')
	@ApiOperation({ summary: '获取掘金优质作者榜 · 开发工具' })
	async getJuejinAuthorDevelopment() {
		return this.JuejinService.getAuthorRankList(JuejinConstants.freebie.category_id)
	}

	@Get('authors/career')
	@ApiOperation({ summary: '获取掘金优质作者榜 · 代码人生' })
	async getJuejinAuthorCareer() {
		return this.JuejinService.getAuthorRankList(JuejinConstants.career.category_id)
	}

	@Get('authors/read')
	@ApiOperation({ summary: '获取掘金优质作者榜 · 阅读' })
	async getJuejinAuthorsRead() {
		return this.JuejinService.getAuthorRankList(JuejinConstants.article.category_id)
	}

	@Get('article/collect/comprehensive')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · 综合类' })
	async getJuejinArticleCollectedRank() {
		return this.JuejinService.getArticleRankList(JuejinConstants.all.category_id, 'collect')
	}

	@Get('article/collect/backend')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · 后端' })
	async getJuejinArticleCollectedBackEnd() {
		return this.JuejinService.getArticleRankList(JuejinConstants.backend.category_id, 'collect')
	}

	@Get('article/collect/frontend')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · 前端' })
	async getJuejinArticleCollectedFrontEnd() {
		return this.JuejinService.getArticleRankList(JuejinConstants.frontend.category_id, 'collect')
	}

	@Get('article/collect/android')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · Android' })
	async getJuejinArticleCollectedAndroid() {
		return this.JuejinService.getArticleRankList(JuejinConstants.android.category_id, 'collect')
	}

	@Get('article/collect/ios')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · iOS' })
	async getJuejinArticleCollectedIos() {
		return this.JuejinService.getArticleRankList(JuejinConstants.ios.category_id, 'collect')
	}

	@Get('article/collect/ai')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · 人工智能' })
	async getJuejinArticleCollectedAi() {
		return this.JuejinService.getArticleRankList(JuejinConstants.ai.category_id, 'collect')
	}

	@Get('article/collect/freebie')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · 开发工具' })
	async getJuejinArticleCollectedDevelopment() {
		return this.JuejinService.getArticleRankList(JuejinConstants.freebie.category_id, 'collect')
	}

	@Get('article/collect/career')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · 代码人生' })
	async getJuejinArticleCollectedCareer() {
		return this.JuejinService.getArticleRankList(JuejinConstants.career.category_id, 'collect')
	}

	@Get('article/collect/read')
	@ApiOperation({ summary: '获取掘金文章收藏榜 · 阅读' })
	async getJuejinArticleCollectedRead() {
		return this.JuejinService.getArticleRankList(JuejinConstants.article.category_id, 'collect')
	}
}
