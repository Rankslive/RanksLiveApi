import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { BilibiliService } from '@/modules/bilibili/bilibili.service'
import { BiliBiliRankType } from '@/constants/bilibili.constants'

@Controller('bilibili')
@ApiTags('哔哩哔哩')
export class BilibiliController {
	constructor(private readonly BiliBiliService: BilibiliService) {}

	@Get('comprehensive/hot')
	@ApiOperation({ summary: '获取哔哩哔哩 · 综合热门榜' })
	async getHot() {
		return await this.BiliBiliService.getComprehensiveHotRankList()
	}

	@Get('must/brush')
	@ApiOperation({ summary: '获取哔哩哔哩 · 入站必刷榜' })
	async getMustBrushList() {
		return await this.BiliBiliService.getPopularPreciousRankList()
	}

	@Get('rank/anime')
	@ApiOperation({ summary: '获取哔哩哔哩 · 番剧排行榜' })
	async getAnimeRank() {
		return await this.BiliBiliService.getWebRankList(BiliBiliRankType.anime)
	}

	@Get('rank/guochuang')
	@ApiOperation({ summary: '获取哔哩哔哩 · 国创排行榜' })
	async getGuoChuangRank() {
		return await this.BiliBiliService.getWebRankList(BiliBiliRankType.guochuang)
	}

	@Get('rank/documentary')
	@ApiOperation({ summary: '获取哔哩哔哩 · 纪录片排行榜' })
	async getDocumentaryRank() {
		return await this.BiliBiliService.getSeasonRankList(BiliBiliRankType.documentary)
	}

	@Get('rank/movie')
	@ApiOperation({ summary: '获取哔哩哔哩 · 电影排行榜' })
	async getMovieRank() {
		return await this.BiliBiliService.getSeasonRankList(BiliBiliRankType.movie)
	}

	@Get('rank/tv')
	@ApiOperation({ summary: '获取哔哩哔哩 · 电视剧排行榜' })
	async getTvRank() {
		return await this.BiliBiliService.getSeasonRankList(BiliBiliRankType.tv)
	}

	@Get('rank/variety')
	@ApiOperation({ summary: '获取哔哩哔哩 · 综艺排行榜' })
	async getVarietyRank() {
		return await this.BiliBiliService.getSeasonRankList(BiliBiliRankType.variety)
	}

	@Get('rank/douga')
	@ApiOperation({ summary: '获取哔哩哔哩 · 动画排行榜' })
	async getDouGaRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.douga)
	}

	@Get('rank/game')
	@ApiOperation({ summary: '获取哔哩哔哩 · 游戏排行榜' })
	async getGameRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.game)
	}

	@Get('rank/kichiku')
	@ApiOperation({ summary: '获取哔哩哔哩 · 鬼畜排行榜' })
	async getKichikuRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.kichiku)
	}

	@Get('rank/music')
	@ApiOperation({ summary: '获取哔哩哔哩 · 音乐排行榜' })
	async getMusicRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.music)
	}

	@Get('rank/dance')
	@ApiOperation({ summary: '获取哔哩哔哩 · 舞蹈排行榜' })
	async getDanceRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.dance)
	}

	@Get('rank/cinephile')
	@ApiOperation({ summary: '获取哔哩哔哩 · 影视排行榜' })
	async getCinephileRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.cinephile)
	}

	@Get('rank/ent')
	@ApiOperation({ summary: '获取哔哩哔哩 · 娱乐排行榜' })
	async getEntRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.ent)
	}

	@Get('rank/knowledge')
	@ApiOperation({ summary: '获取哔哩哔哩 · 知识排行榜' })
	async getKnowledgeRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.knowledge)
	}

	@Get('rank/tech')
	@ApiOperation({ summary: '获取哔哩哔哩 · 科技数码排行榜' })
	async getTechRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.tech)
	}

	@Get('rank/food')
	@ApiOperation({ summary: '获取哔哩哔哩 · 美食排行榜' })
	async getFoodRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.food)
	}

	@Get('rank/car')
	@ApiOperation({ summary: '获取哔哩哔哩 · 汽车排行榜' })
	async getCarRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.car)
	}

	@Get('rank/fashion')
	@ApiOperation({ summary: '获取哔哩哔哩 · 时尚美妆排行榜' })
	async getFashionRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.fashion)
	}

	@Get('rank/sports')
	@ApiOperation({ summary: '获取哔哩哔哩 · 体育运动排行榜' })
	async getSportsRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.sports)
	}

	@Get('rank/animal')
	@ApiOperation({ summary: '获取哔哩哔哩 · 动物排行榜' })
	async getAnimalRank() {
		return await this.BiliBiliService.getRankListV2(BiliBiliRankType.animal)
	}
}
